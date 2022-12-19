interface Carro {
  readonly nome: string;
  readonly marca: string;
  readonly ano: number;
}

/*
  Readonly significa que o valor depois que declarado não pode ser alterado
*/

const carro1: Carro = {
  nome: "Uno",
  ano: 1999,
  marca: "Fiat",
};

/* 
  carro1.ano = 2000;

  Acontecera um erro devido ao uso do readonly
*/

interface Empresa {
  readonly nome: string;
  readonly empregados: string[];
}

const empresa1: Empresa = {
  nome: "Udemy",
  empregados: ["Luiz", "Ruan", "Marcos"],
};

/*
  Mas porque ele permiti usar o push ?

  Pois o array é imutavel, é a mesma coisa de usar uma const de array,
  você consegue utilizar normalmente o push, mas agora alterar o valor inteiro de
  um array não é possivel

  empresa1.empregados = []

  para bloquearmos o push e demais operações de alteração do array utilizamos o readonly,
  antes do tipo

  
  readonly empregados: readonly string[];
*/
empresa1.empregados.push("Antonio");

