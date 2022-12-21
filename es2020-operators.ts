type Documento = {
  titulo: string;
  corpo: string;
  data?: Date;
};

// Encadeamento opcional

const documento: Documento = {
  titulo: "Um documento",
  corpo: "Corpo do documento",
};

/*
  Este sinal de ? antes do argumento que pode ser não enviado, indica que se o
  argumento não estiver presente ele não executa o método a frente para não dar
  um erro de tempo de execução. E ele retorno undefined => Este é o encadeamento opcional.
*/

console.log(documento.data?.toString());

/*
  este sinal de ?? é o operador de coalescencia nula, a função dele é verificar
  se o valor antes é undefined ou null se for ele retorna oque vem a frente.

  como se fosse um if.
*/

console.log(documento.data?.toString() ?? "123");
