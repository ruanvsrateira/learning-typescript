/*
    Criado classe do escritor aonde ele precisa ou não de uma ferramenta(tool),

    Nesse classe é usada Dependency Inversion que ao invés de escritor depender
    de caneta ou maquina, ele depende do modelo que elas usam que é a classe abstrata
    ferramenta
*/
export class Writter {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("não posso escrever estou sem ferramenta");
      return;
    }
    this.tool.write();
  }
}

/*
    Ferramenta serve como base para outras classes filhas, ela server como modelo e contrato
*/
export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name() {
    return this._name;
  }
}

/* 
    Caneta é filha de ferramenta aonde precisa ter todos os métodos indicados na
    classe abstrata 
*/
export class Pencil extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo ...`);
  }
}

/* 
    Maquina é filha de ferramenta aonde precisa ter todos os métodos indicados na
    classe abstrata 
*/
export class Machine extends Tool {
  write(): void {
    console.log(`${this.name} está digitando ...`);
  }
}

const writer = new Writter("Fernando");

const pencil = new Pencil("BIC");

const machine = new Machine("Machine");

console.log(writer.name);
console.log(pencil.name);
console.log(machine.name);

writer.tool = pencil;
writer.write();
writer.tool = machine;
writer.write();
writer.tool = null;
writer.write();
