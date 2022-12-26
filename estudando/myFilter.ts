export type Callbackfn<U> = (value: U) => boolean;

export function filter<T>(array: T[], callbackfn: Callbackfn<T>) {
  const arrayFiltered: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      arrayFiltered.push(array[i]);
    }
  }

  return arrayFiltered;
}

const array = [1, 2, 3, 4, 5, 6];

console.log(filter(array, (value) => value < 4));
