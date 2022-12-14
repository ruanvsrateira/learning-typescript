export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private email: string,
    protected cpf: string
  ) {}

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

// herdando atributs e métodos da classe pesssoa

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    email: string,
    cpf: string,

    // criando os proprios atributos de aluno
    private numeroChamada: number,
    public responderChamada = () => {
      return this.nome + " "+ this.numeroChamada + " presente !";
    }
  ) {
    // chamando construtor da classe pessoa
    super(nome, sobrenome, email, cpf);
  }
}

const aluno = new Aluno('Ruan', 'Rateira', 'vruan85@gmail.com', '000-000-000-00', 23);

console.log(aluno.responderChamada());