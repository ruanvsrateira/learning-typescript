// Criação de classe People

export class People {
  constructor(
    private name: string,
    private email: string,
    private _cpf: string,
    private age: number
  ) {}

  /*
        Para criação de um Getter usamos a palavra reservada get, 
        Por padrão a palavra depois do get se comporta como atributo não  podendo
        ter um atributo com o mesmo nome. Por isso colocamos um underline no atributo
        que será usado
    */
  get cpf(): string {
    console.log("Getter chamado !");

    return this._cpf;
  }

  set cpf(cpf: string) {
    console.log("Setter chamado !");

    this._cpf = cpf;
  }

    /*
        Para criação de um Setter usamos a palavra reservada set
        no set não podemos usar type annotations para indicar o retorno,
    */
}

const people = new People("ruan", "vruan85@gmail.com", "123.123.123-12", 18);

console.log(people.cpf);

people.cpf = "111.111.111-11";
