function decoratorFalaTchau(
  classProto: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => console.log("fala Tchau");
}

export class Pessoa {
  @decoratorFalaTchau
  falaOi(): void {
    console.log("OIII");
  }
}

const pessoa = new Pessoa();
pessoa.falaOi();
