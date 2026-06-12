import { useState, useCallback, useMemo, useRef, Dispatch, SetStateAction } from 'react';

export interface UseToggleSetReturn<T> {
  set: Set<T>;
  toggle: (item: T) => void;
  add: (item: T) => void;
  remove: (item: T) => void;
  has: (item: T) => boolean;
  clear: () => void;
  setSet: Dispatch<SetStateAction<Set<T>>>;
  size: number;
}

export function useToggleSet<T>(initialValue?: Set<T>): UseToggleSetReturn<T> {
  const [internalSet, setSet] = useState<Set<T>>(() => initialValue || new Set());
  const setRef = useRef(internalSet);
  setRef.current = internalSet;

  const toggle = useCallback((item: T) => {
    setSet(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  }, []);

  const add = useCallback((item: T) => {
    setSet(prev => new Set(prev).add(item));
  }, []);

  const remove = useCallback((item: T) => {
    setSet(prev => {
      const newSet = new Set(prev);
      newSet.delete(item);
      return newSet;
    });
  }, []);

  const has = useCallback((item: T): boolean => {
    return setRef.current.has(item);
  }, []);

  const clear = useCallback(() => {
    setSet(new Set());
  }, []);

  const size = useMemo(() => internalSet.size, [internalSet]);

  return { 
    set: internalSet, 
    toggle, 
    add, 
    remove, 
    has, 
    clear, 
    setSet, 
    size 
  };
}