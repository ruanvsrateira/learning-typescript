// Criada a classe pessoa

class Pessoa {
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

// herdando os atributos e métodos da classe pessoa, só que sobrescrevendo o metodo getNomeCompleto

class Client extends Pessoa {
  getNomeCompleto(): string {
    return "Cliente: " + this.nome + " " + this.sobrenome;
  }
}

// herdando os atributos e métodos da classe pessoa, só que sobrescrevendo o metodo getNomeCompleto
class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "Aluno: " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa(
  "Ruan",
  "Rateira",
  "vruan85@gmail.com",
  "552-861-428.77"
);

const client = new Client(
  "Ruan",
  "Rateira",
  "vruan85@gmail.com",
  "552-861-428.77"
);

const aluno = new Aluno(
  "Ruan",
  "Rateira",
  "vruan85@gmail.com",
  "552-861-428.77"
);

// console.log na saida do método

console.log("PESSOA => " + pessoa.getNomeCompleto());

console.log("Cliente => " + client.getNomeCompleto());

console.log("Aluno => " + aluno.getNomeCompleto());
