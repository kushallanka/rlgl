# Design System

The UI is built on a tokenized, theme-aware design system. **Light mode** is minimal and elegant (solid white surfaces, hairline borders, soft layered shadows). **Dark mode** is glassmorphism (translucent blurred surfaces on a zinc-950 canvas with a subtle indigo/violet atmosphere). One file controls both: [src/index.css](../src/index.css).

## Color language

| Role | Usage |
|------|-------|
| **Indigo accent** | The single brand accent: primary buttons, focus rings, active states, links |
| **Emerald / Rose** | Pass / fail — the product's core semantic (and the logo's two dots) |
| **Amber / Sky** | Blocked-warning / informational states |
| **Zinc neutrals** | Everything else |

Don't introduce new hues. If something needs color, it is either the accent or one of the four status colors.

## Tokens

Semantic CSS variables are defined in `:root` (light) and `.dark` (dark), then exposed as Tailwind utilities via `@theme inline`. Use these instead of raw palette classes — they flip automatically with the theme, so no `dark:` duplication is needed:

| Utility | Meaning |
|---------|---------|
| `bg-canvas` | Page background |
| `bg-surface`, `bg-surface-2`, `bg-overlay` | Cards, inset fields, popovers |
| `text-fg`, `text-fg-secondary`, `text-fg-muted`, `text-fg-subtle` | Text hierarchy (strongest → weakest) |
| `border-edge`, `border-edge-strong` | Hairline and emphasized borders |
| `bg-accent`, `text-accent`, `bg-accent-hover`, `text-accent-fg` | Brand accent |
| `text-success` / `danger` / `warning` / `info` | Status colors |
| `shadow-card`, `shadow-raised`, `shadow-overlay`, `shadow-accent` | Elevation scale |

## Surface classes

Defined in `@layer components` in `src/index.css`. Theme-aware — work in light and dark without `dark:` overrides.

| Class | Use for |
|-------|---------|
| `glass-card` | Quiet background cards |
| `liquid-glass` | Default interactive card surface |
| `liquid-glass-strong` | Hero sections, large feature panels |
| `glass-input` | Form field backgrounds |
| `glass-nav` | Navbar / chrome |
| `dropdown-surface` | Popovers, context menus |
| `glass-modal` | Modal panels — solid `bg-overlay`, **no** `backdrop-filter` |

**`glass-modal` vs `liquid-glass-strong`:** Use `glass-modal` for anything that animates in (dialogs, drawers, sheets). `liquid-glass-strong` uses `backdrop-filter: blur()`, which forces the browser to re-blur the entire viewport every animation frame; on a 1440p+ screen this breaks the frame budget and produces visible stutter. `glass-modal` achieves a near-identical visual with a solid semi-opaque token color and no filter cost.

## Transition utility

```css
/* src/index.css */
.transition-ui {
  transition-property: color, background-color, border-color, fill, stroke, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
```

**Always use `.transition-ui` instead of Tailwind's `transition-all` on any element that also uses Framer Motion.** `transition-all` includes `transform` and `opacity`; Framer Motion writes those properties on every animation frame, so a CSS transition on the same property re-interpolates each frame write over its full duration — visually this reads as lag or rubber-band stutter on hover and tap. `.transition-ui` deliberately excludes `transform` and `opacity`.

Elements that need CSS `transform` transitions (e.g. hover scale on a static element with no Framer Motion) should use an explicit class: `transition-[transform] duration-200` or `transition-[transform,box-shadow] duration-200`.

## Primitives — `src/shared/ui`

Always compose these rather than styling raw elements:

- **`Button`** — `variant`: `primary | secondary | ghost | danger | subtle`; `size`: `sm | md | lg`; `loading`, `fullWidth`, `leftIcon`/`rightIcon`. Forwards all native props.
- **`IconButton`** — icon-only button; `label` is required (becomes `aria-label`).
- **`Badge`** — `variant`: `neutral | accent | success | danger | warning | info`; optional `dot`.
- **`Card`** — `variant`: `flat | raised | strong`; `padding`; `interactive` for clickable cards.
- **`EmptyState`** — icon + title + description + optional action. Use for every empty list/collection.
- **`Skeleton`**, **`Spinner`** — loading placeholders (`Skeleton` for content shape, `Spinner` for actions).
- **`Kbd`** — keyboard shortcut hints.
- **`Tooltip`** — CSS-only, shows on hover and keyboard focus.

Composite components (modals, form fields, dropdowns, toasts) live in `src/shared/components` and are built on the primitives. `Modal` includes focus trap, Escape handling, scroll lock, and ARIA dialog semantics out of the box.

## App shell — `src/app/layout`

`AppShell` provides the authenticated chrome: skip-to-content link, `Navbar`, page transition, theme switch, command palette, and global shortcuts.

### Keyboard shortcuts (`src/app/commands`)

| Shortcut | Action |
|----------|--------|
| `Ctrl/⌘ K` | Command palette (navigate, switch project, toggle theme) |
| `G` then `D / P / T / R / A` | Go to Dashboard / Projects / Test repo / Runs / Admin |

---

## Performance & Animation Conventions

These rules exist because users should experience 60–240 fps depending on their display. Breaking them causes visible stutter at any refresh rate.

### The three-layer model

Animations fall into three categories; use the cheapest layer that achieves the visual:

| Layer | Runs on | Examples | Cost |
|-------|---------|---------|------|
| **Compositor** | GPU, never touches main thread | CSS `transform`, `opacity`, `filter` animations | Free |
| **CSS transition** | Main thread, but fast | `background-color`, `border-color`, `box-shadow` | Very low |
| **JS-driven (Framer Motion)** | Main thread rAF loop | Interactive spring physics, gesture tracking | Moderate |

Use JS-driven animation **only** when you need interactive physics (drag, gesture response) or sequenced entrance choreography. Everything else belongs in CSS.

### Modal and overlay entrances

```tsx
// Correct — 200ms tween, compositor-only properties
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.96 }}
  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="glass-modal …"
/>

// Wrong — spring overshoots and bounces; backdrop-blur forces full repaint per frame
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="liquid-glass-strong backdrop-blur-md …"
/>
```

- Modal panels: `duration: 0.2`, ease `[0.25, 0.46, 0.45, 0.94]`
- Dropdowns and tooltips: `duration: 0.15`, same ease
- Overlay scrims: plain `bg-black/70` — no `backdrop-filter`

### Height animations

`height: 'auto'` springs reflow the DOM every frame for ~600 ms with overshoot. Use an explicit tween:

```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="overflow-hidden"
/>
```

### List entrance stagger

Cap stagger at 6 items regardless of list length. Past item 6 the delay exceeds 240 ms and the user sees nothing happen:

```tsx
transition={{ delay: Math.min(index, 6) * 0.04, duration: 0.25 }}
```

Never put `layout` or `layoutId` on list items inside a scrollable container — it triggers FLIP measurements on every render.

### CSS keyframe loops

Decorative infinite animations (floating elements, shimmer effects) must use CSS `@keyframes`, not Framer Motion's `repeat: Infinity`. A JS `repeat: Infinity` keeps a `requestAnimationFrame` callback alive on the main thread; CSS animations run on the compositor thread.

```css
/* src/index.css */
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
.animate-float { animation: float-y 4s ease-in-out infinite; }

@keyframes shimmer-sweep { … }
.animate-shimmer-sweep { animation: shimmer-sweep 2s linear infinite; }
```

### Progress bars and width transitions

Use CSS `transition-[width]` instead of Framer Motion `layout`:

```tsx
// Correct
<div
  className="h-1.5 rounded-full transition-[width] duration-300 ease-out"
  style={{ width: `${pct}%` }}
/>

// Wrong — motion layout recalculates layout on every width change
<motion.div layout style={{ width: `${pct}%` }} />
```

### Optimistic UI

All data-mutating interactions patch the React Query cache synchronously so the UI responds on the frame of the user's action:

```tsx
onMutate: async (vars) => {
  await queryClient.cancelQueries({ queryKey: LIST_KEY });
  const previous = snapshotLists(queryClient);
  patchCache(queryClient, vars);         // instant UI feedback
  return { previous };
},
onError: (_err, _vars, ctx) => restoreLists(queryClient, ctx?.previous),
onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
```

`LIST_KEY = ['testruns', 'list']` is the scoped key for all run-list queries. Using a narrower key than `['testruns']` avoids refetching unrelated suite/case queries on every result status click.

### `prefers-reduced-motion`

A global rule in `src/index.css` disables all `animation` and `transition` for users who have requested reduced motion. All CSS keyframe classes and Framer Motion components inherit this automatically — do not add per-component media query overrides.

## Conventions (summary)

- **Motion:** 150–300 ms tweens, `transform`/`opacity` only. Springs only for interactive physics. `prefers-reduced-motion` honored globally.
- **CSS transitions:** Use `.transition-ui` for color/border/shadow changes on Framer Motion elements; use explicit `transition-[transform]` for pure CSS hover effects.
- **Modals:** `.glass-modal` panel on a plain dim scrim. No `backdrop-filter` on animated layers.
- **Loops:** CSS `@keyframes` not `repeat: Infinity`.
- **Lists:** Stagger capped at 6; no `layout`/`popLayout` on virtualized or scrollable lists.
- **Heights:** Explicit tween on `height: 'auto'` animations.
- **Headings:** `font-heading font-semibold tracking-tight` — no italics, no gradient text.
- **Icons:** Lucide only, consistent sizing (`w-4/5/6`); never emojis.
- **Interactive elements:** `cursor-pointer` plus a visible hover state that doesn't shift layout.
- **Accessibility:** labeled inputs, `aria-label` on icon-only controls, visible focus rings (global `:focus-visible`), 4.5:1 minimum text contrast in both themes.
