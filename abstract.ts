/*
    Quando criamos uma classe abstrata é um modelo para outras classes extenderem,
    extenderem, já que ela por si mesma não pode ser instanciada
*/
export abstract class Person {
  // Nessa linha indico que a propriedade emoji deve ser implementada nas classes filhas e deve ser do tipo string
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected atack: number,
    protected life: number
  ) {}

  atacar(person: Person): void {
    console.log(`${this.name} está atacando ${person.name} ...`);

    person.lostLife(this.atack);
  }

  lostLife(atack: number): void {
    console.log(`${this.name} agora tem ${this.life} de vida ...`);

    this.life -= atack;
  }

  // Nesse linha indico que ao classes filhas precisam ter esse método, que se chama bordão e retorna void
  abstract bordao(): void;
}

export class Guerreira extends Person {
  protected emoji = "\u{1F9DD}";

  // implementando método exigido
  bordao(): void {
    console.log(this.emoji + " GUERREIRA AO ATAQUE!");
  }
}
export class Monstro extends Person {
  protected emoji = "\u{1F9DD}";

  // implementando método exigido
  bordao(): void {
    console.log(this.emoji + " MONSTRO AO ATAQUE!");
  }
}

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("Monstro", 87, 1000);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

monstro.atacar(guerreira);

monstro.atacar(guerreira);

monstro.atacar(guerreira);

monstro.atacar(guerreira);
