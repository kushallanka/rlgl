# Frontend Performance Guide

This document explains the performance decisions baked into the RLGL frontend and provides the rules contributors must follow to keep the UI smooth at 60–240 fps.

---

## Background

The UI uses Framer Motion for interactive animations and React Query for server state. These two tools interact in ways that produce invisible but cumulative jank:

1. **CSS transitions conflicting with JS animations.** Tailwind's `transition-all` includes `transform` and `opacity`. Framer Motion writes those properties on every `requestAnimationFrame`. A CSS transition re-interpolates each write over its full duration (e.g. 200 ms), so every Framer write gets "smoothed" by the CSS transition — producing a visible lag/rubber-band effect on hover and tap, especially at high refresh rates.

2. **Animated `backdrop-filter` cost.** `backdrop-filter: blur()` forces the compositor to re-sample and blur the entire viewport behind the element. When the element itself is animating (opacity, scale), this sample runs on every frame. At 1440p+ with 120 Hz displays this easily exceeds 8 ms/frame.

3. **`height: auto` springs.** Springs on `height: auto` calculate the target height via DOM measurement, overshoot it, and bounce — causing layout reflows on every frame for ~600 ms. With a staggered list above a panel that expands on click, this is noticeable on any machine.

4. **Infinite JS animation loops.** Framer Motion's `repeat: Infinity` keeps a `requestAnimationFrame` callback running at all times. Decorative float/shimmer effects that run on `repeat: Infinity` burn CPU/GPU even when the user isn't interacting.

5. **`layout` and `popLayout` FLIP cost.** `AnimatePresence mode="popLayout"` measures the DOM before and after each render to compute FLIP deltas — triggered on every list change, including pagination and filter interactions.

---

## Rule 1 — Never use `transition-all` on a Framer Motion element

Use `.transition-ui` instead. It covers `color`, `background-color`, `border-color`, `fill`, `stroke`, and `box-shadow` — the only properties that should ever be CSS-transitioned on an element Framer also touches.

```tsx
// Correct
<motion.button className="… transition-ui" whileHover={{ opacity: 0.85 }} />

// Wrong — transition-all includes transform, which Framer writes per-frame
<motion.button className="… transition-all" whileHover={{ opacity: 0.85 }} />
```

If the element only has CSS hover effects (no Framer), use explicit property transitions:

```tsx
// Pure CSS hover — fine to use transition-[transform]
<button className="… transition-[transform,box-shadow] duration-200 hover:scale-105" />
```

---

## Rule 2 — No `backdrop-filter` on animated layers

Animated layers = anything inside `<motion.div>` with `initial`/`animate`/`exit`, or anything that Framer controls. This includes modals, drawers, dropdowns, and tooltips.

```tsx
// Correct — solid surface, no filter
<motion.div className="glass-modal rounded-2xl p-6" … />

// Wrong — backdrop-filter + animation = full viewport repaint every frame
<motion.div className="liquid-glass-strong backdrop-blur-md rounded-2xl p-6" … />
```

Static decorative blurs (e.g. a blurred background orb that never animates) are fine.

---

## Rule 3 — No springs on height or width

Springs on dimensional properties cause continuous layout reflows.

```tsx
// Correct — explicit tween
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="overflow-hidden"
/>

// Wrong — spring on height
<motion.div
  animate={{ height: 'auto' }}
  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
/>
```

For progress bars and any width that changes reactively: use CSS `transition-[width]`:

```tsx
<div
  className="transition-[width] duration-300 ease-out"
  style={{ width: `${pct}%` }}
/>
```

---

## Rule 4 — Decorative loops must be CSS keyframes

Any animation that runs `repeat: Infinity` — shimmer sweeps, floating elements, pulse effects — must be a CSS `@keyframes` animation, not a Framer Motion loop. CSS animations run on the compositor thread.

```tsx
// Correct — CSS class handles the loop, zero JS cost
<div className="animate-float" />

// Wrong — keeps a rAF callback alive indefinitely
<motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
```

CSS keyframe classes are defined in `src/index.css`:

```css
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
.animate-float { animation: float-y 4s ease-in-out infinite; }

@keyframes shimmer-sweep { … }
.animate-shimmer-sweep { animation: shimmer-sweep 2s linear infinite; }
```

---

## Rule 5 — No `layout`/`popLayout` on scrollable or virtualized lists

`AnimatePresence mode="popLayout"` measures every list item's bounding rect before and after each render. On a virtualized list with 100+ items this is expensive. On a plain list it still causes unnecessary work on every filter, sort, or pagination interaction.

```tsx
// Correct
<AnimatePresence>
  {items.map((item) => <Item key={item.id} />)}
</AnimatePresence>

// Wrong — FLIP measurement on every list change
<AnimatePresence mode="popLayout">
  {items.map((item) => <motion.div layout key={item.id} />)}
</AnimatePresence>
```

---

## Rule 6 — Cap list stagger at 6 items

```tsx
transition={{ delay: Math.min(index, 6) * 0.04 }}
```

At 7 items the 7th has a 280 ms delay. At 20 items the last card would enter at 800 ms — long after the user has already started scrolling. Cap at 6 items (max delay 240 ms).

---

## Rule 7 — Modal and dropdown entrance specs

All modal entrances use the Apple-style ease:

```tsx
transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
```

| Element type | Duration | Properties |
|---|---|---|
| Modals / drawers | 0.20 s | `opacity`, `scale: 0.96 → 1` |
| Dropdowns | 0.15 s | `opacity`, `scale: 0.96 → 1`, `y: ±6 → 0` |
| Bulk action bars | 0.18 s | `height: 0 → auto`, `opacity` |
| Page route transition | 0.25 s | `opacity`, `y: 8 → 0` |

No springs for entrance animations. Springs are appropriate only for interactive gesture feedback (drag handle, pull-to-refresh) where the spring constant must match the gesture's momentum.

---

## Rule 8 — Optimistic cache updates for all mutations

Every mutation that the user initiates should reflect in the UI immediately, without waiting for the server response. Implement with TanStack Query's `onMutate` / `onError` / `onSettled` pattern:

```tsx
const mutation = useMutation({
  mutationFn: (vars) => api.update(vars),
  onMutate: async (vars) => {
    await queryClient.cancelQueries({ queryKey: LIST_KEY });
    const previous = queryClient.getQueriesData({ queryKey: LIST_KEY });
    // Apply the expected change immediately
    queryClient.setQueriesData({ queryKey: LIST_KEY }, (old) => patch(old, vars));
    return { previous };
  },
  onError: (_err, _vars, ctx) => {
    // Revert on failure
    ctx?.previous?.forEach(([key, data]) => queryClient.setQueryData(key, data));
  },
  onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
});
```

The `LIST_KEY = ['testruns', 'list']` scope is intentionally narrow — it avoids invalidating unrelated query keys (e.g. test case lists) when a run result status changes.

---

## Measuring

To verify a change doesn't introduce jank:

1. Open Chrome DevTools → Performance panel.
2. Enable CPU throttling (4× slowdown simulates a mid-range laptop).
3. Record 2–3 seconds while performing the interaction (open modal, click result status, scroll list).
4. Look for red frames (> 16 ms) in the Frames row. Each red frame is a dropped frame at 60 Hz.

For 120 Hz targets, the budget is 8.3 ms/frame. `backdrop-filter: blur()` alone on a 1440p screen can consume 6–10 ms, leaving almost no room for the rest of the work.

Common offenders visible in the flame chart:
- `updateStyles` on every frame → CSS transition on Framer-controlled property
- `Paint` on every frame → animated backdrop-filter
- `Layout` on every frame → height spring or `layout` prop on a list item
