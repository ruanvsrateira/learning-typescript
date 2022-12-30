function addField(key: string, value: string) {
  return <T extends new (...args: any[]) => any>(target: T) => {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this[key] = value;
      }
    };
  };
}

@addField("nomeCompleto", "ruan rateira")
export class Pessoa {
  constructor(private nome: string, private sobrenome: string) {}
}

const pessoa = new Pessoa("ruan", "rateira");

console.log(pessoa);