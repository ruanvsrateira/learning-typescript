function AddField(key: string, value: string) {
  return <T extends new (...args: any[]) => any>(target: T) => {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this[key] = value;
      }
    };
  };
}

@AddField("password", "123")
export class Pessoa {
  constructor(private nome: string, private email: string) {}
}

const pessoa = new Pessoa("Ruan", "Rateira");

console.log(pessoa);
