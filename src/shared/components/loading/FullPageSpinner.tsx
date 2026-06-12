export function FullPageSpinner({ label = 'Loading…' }: { label?: string }) {
  return (
    <div
      className="min-h-[50vh] flex flex-col items-center justify-center gap-4 text-gray-500 dark:text-gray-300"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="h-10 w-10 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
      <p className="text-sm font-medium tracking-wide">{label}</p>
    </div>
  );
}
