/*
  Lemos o extends como no "no máximo" sendo usado como uma restrição(constraints). 
  Então no caso => no máximo chave de O
*/

type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: "amarelo",
  vacinas: ["Vacina 1", "Vacina 2"],
};

console.log(obterChave(animal, "cor"));
