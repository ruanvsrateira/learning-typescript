/* 
  O decorator de parametros, recebe 3 parametros o class Prototype, nome do método aonde ele esta
  sendo utilizado e por fim a posição do parametro(index)
*/
function decorator(classProto: string, methodName: string, index: number) {
  console.log(classProto);
  console.log(methodName);
  console.log(index);
}

export class Pessoa {
  constructor(private name: string) {}

  falaMensagem(@decorator mensagem: string) {
    console.log(this.name + " " + "está dizendo: " + mensagem);
  }
}

const pessoa = new Pessoa("ruan");

pessoa.falaMensagem("fala fellas");
