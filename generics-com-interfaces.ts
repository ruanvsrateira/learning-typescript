export interface Pessoa<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
  tempoDeTrabalho: U;
}

/* Os generics podem ter um tipo padrão, caso os tipos não forem enviados igualmente as funções */
export interface Pessoa2<V = string, W = number> {
  nome: V;
  sobrenome: V;
  idade: W;
  tempoDeTrabalho: W;
}

const pessoa1: Pessoa<string, number> = {
  nome: "Ruan",
  sobrenome: "Victor",
  idade: 30,
  tempoDeTrabalho: 25,
};

const pessoa2: Pessoa2 = {
  nome: "William",
  sobrenome: "Ricardo",
  idade: 23,
  tempoDeTrabalho: 20,
};

console.log(pessoa1, pessoa2);
