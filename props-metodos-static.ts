// interface de funcionario
interface Funcionary {
  name: string;
  email: string;
}

// Criando a classe empresa com exemplo
export class Empresa {
  /*
     propriedade estatica

     é acessado sem realizar a instancia da classe, somente colocando o nome da classe,
     e depois .(nome da propriedade), as instancias nao pode acessar as propriedades
     estaticos
  */
  static speak: string = "hello";

  /*
     Metodo estatico

     é acessado sem realizar a instancia da classe, somente colocando o nome da classe,
     e depois .(nome do metodo), as instancias nao pode acessar os metodos
     estaticos
  */
  static speakHello(): string {
    return "hello";
  }
}

console.log(Empresa.speakHello());
console.log(Empresa.speak);
