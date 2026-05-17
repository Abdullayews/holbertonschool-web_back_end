export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  const updated = count + 1;

  if (updated >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, updated);
}
