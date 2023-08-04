const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap };
