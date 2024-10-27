export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const newCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, newCount);

  console.log(`Endpoint ${endpoint.name || 'unknown'} called ${newCount} times`);

  if (newCount >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }

  return newCount;
}
