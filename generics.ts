// Generics -> é usado quando a gente não sabe o que vai receber podendo ser qualquer tipo

type CallBackFunction<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: CallBackFunction<T>): T[] {
  const myFilteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      myFilteredArray.push(array[i]);
    }
  }

  return myFilteredArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltrado = myFilter(array, (value) => value < 5);

console.log(arrayFiltrado);
