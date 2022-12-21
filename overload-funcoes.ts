type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

/* 
  Overload é quando a função pode ter comportamentos e retornos diferentes,
  dependendo dos parametro, por exemplo a função pode funcionar de um jeito,
  com um parametro e com 3 funciona de outro jeito.  
*/

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    args.reduce((soma, atual) => soma + atual, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1, 2, 3));
