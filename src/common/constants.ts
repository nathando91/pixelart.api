export function getRandomElements<T>(array: T[], numElements: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numElements);
}
