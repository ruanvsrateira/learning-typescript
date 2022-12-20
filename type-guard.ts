/* type guard é asseguar o tipo para realizar a trativa */
export function add(a: unknown, b: unknown): number | string {
  return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

type Pessoa = {
  tipo: "pessoa";
  nome: string;
};

type Animal = {
  tipo: "animal";
  cor: string;
};

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "pessoa" = "pessoa";
  constructor(public nome: string) {}
}

/* 
  Aqui estou assegurando o tipo para realizar a devida tratativa com o campo tipo
  do obj.
*/

function mostrarNome(obj: PessoaOuAnimal): void {
  switch (obj.tipo) {
    case "animal":
      console.log("Animal da cor " + obj.cor);
      return;
    case "pessoa":
      console.log("Pessoa do nome " + obj.nome);
      return;
  }
}

mostrarNome(new Aluno("Joao"));
mostrarNome({
  tipo: "animal",
  cor: "Rosa",
});
