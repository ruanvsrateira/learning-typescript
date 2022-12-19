/*
    A Relação de composição temos o exemplo do carro juntamente com o motor,
    aonde um compõe o outro, um não funcionando sem o outro.
*/

export class Carro {
  // Dentro da classe de carro é instanciado o motor, ja que um não funciona sem o outro
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log("Motor está ligando ...");
  }

  acelerar(): void {
    console.log("Motor está acelerando ...");
  }

  parar(): void {
    console.log("Motor está parando ...");
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
