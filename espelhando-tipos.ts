/* Criando tipo normalmente */
type Veiculo = {
  nome: string;
  marca: string;
  ano: number;
};

/* 
  Aqui indico que o tipo de name será o mesmo tipo da chave nome do tipo veiculo
  funcionando como um espelho, e nas outras chaves acontece a mesma coisa.
*/
type Car = {
  name: Veiculo["nome"];
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
};

const carro: Car = {
  name: "Palio",
  brand: "Fiat",
  year: 2010,
};
