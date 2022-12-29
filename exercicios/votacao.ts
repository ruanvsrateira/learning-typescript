type OpcaoVotacaoType = {
  name: string;
  votes: number;
};

export class AplicativoDeVotacao {
  constructor(private opcoesDeVotacao: OpcaoVotacaoType[]) {}

  adicionarOpcaoDeVotacao(opcaoDeVotacao: OpcaoVotacaoType): void {
    for (let i = 0; i < this.opcoesDeVotacao.length; i++) {
      if (this.opcoesDeVotacao[i].name == opcaoDeVotacao.name) {
        console.log("Opção Já Existente com este nome !");
        return;
      }
    }

    this.opcoesDeVotacao.push(opcaoDeVotacao);
  }

  mostrarVotos(): void {
    if (this.opcoesDeVotacao.length == 0) {
      console.log("não há opções cadastradas !");
    }

    for (let i = 0; i < this.opcoesDeVotacao.length; i++) {
      console.log(
        this.opcoesDeVotacao[i].name + " " + this.opcoesDeVotacao[i].votes
      );
    }
  }

  votar(opcaoDeVoto: string): void {
    const opcao = this.opcoesDeVotacao.find(
      (opcao) => opcao.name == opcaoDeVoto
    );

    if (opcao) {
      opcao.votes++;
    } else {
      console.log("Opção Inválida !!");
    }
  }
}

const aplicativo = new AplicativoDeVotacao([
  { name: "python", votes: 0 },
  { name: "Javascript", votes: 2 },
  { name: "Typescript", votes: 3 },
]);

aplicativo.mostrarVotos();
