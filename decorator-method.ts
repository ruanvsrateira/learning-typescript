/* No class method a gente consegue usar o decorator para modificar o metodo antes de ele ser executado */

function decorator(
  classProto: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | any {
  descriptor.writable = true;
  descriptor.value = (nome: string, sobrenome: string) => {
    return `${nome}  ${sobrenome}`.toUpperCase();
  };
}

export class Pessoa {
  constructor(private nome: string, private sobrenome: string) {}

  falaOi(): string {
    return "OOOOIIIII";
  }

  @decorator
  falaNomeCompleto(nome: string, sobrenome: string): string | void {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("nome", "sobrenome");

console.log(pessoa.falaNomeCompleto("ruan", "rateira"));
