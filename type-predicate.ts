/*
  Mesmo ao realizar o typeguard em uma função o typescript buga. Devido que o typeguard é realizado
  em outro escopo.

  E devido a isso usamos o Type Predicate, que ao realizar o type guard na função em outro escopo,
  indicamos no retorno que o valor is number, isso significa que quando o retornar true value is number
*/

export function isNumber(value: unknown): value is number {
  return typeof value == "number";
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, number) => {
    if (isNumber(sum) && isNumber(number)) {
      return sum + number;
    }

    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
