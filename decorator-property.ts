/*
  no property decorator, recebemos 2 parametros, o class prototype e o nome da propriedade
  e podemos retornar um property descriptor
*/

function decorator(classProto: any, propertyName: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => {
      console.log("getter chamado !!");

      return propertyValue;
    },
    set: (value: any) => {
      console.log("setter chamado !!");

      if (typeof value == "string") {
        propertyValue = value.split("").reverse().join("");
        return;
      }

      propertyValue = value;
    },
  };
}

export class Pessoa {
  @decorator
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const pessoa = new Pessoa("ruan");

pessoa.nome;
pessoa.nome = "fellas";
