import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { motion } from 'motion/react';

export function GlobalRequestBar() {
  const fetching = useIsFetching();
  const mutating = useIsMutating();
  const active = fetching + mutating > 0;

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[200] h-0.5" aria-hidden={!active}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 origin-left"
      />
    </div>
  );
}
