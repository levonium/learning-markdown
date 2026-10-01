import { ref, watch } from "vue";

/**
 * A tiny reactive wrapper around localStorage.
 */
export function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const value = ref(stored !== null ? stored : defaultValue);

  watch(
    value,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newValue);
      }
    },
    { deep: true }
  );

  return value;
}
