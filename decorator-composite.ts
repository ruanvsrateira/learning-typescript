function addField(key: string, value: string | number) {
  return <T extends new (...args: any[]) => any>(target: T) => {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this[key] = value;
      }
    };
  };
}

// pode ser usado mais de um decorador na classe, isso se chama decorator composite

@addField("nomeCompleto", "ruan rateira")
@addField("idade", 18)
export class Pessoa {
  constructor(private nome: string, private sobrenome: string) {}
}

const pessoa = new Pessoa("ruan", "rateira");

console.log(pessoa);
