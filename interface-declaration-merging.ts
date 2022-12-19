interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

/* 
  Ao criar duas intefaces com o mesmo nome, elas se unem concatenando uma na outra,
  ou seja, o objeto que tiver este tipo Pessoa deve ter um nome e sobrenome como string
*/

const pessoa: Pessoa = {
  nome: "",
  sobrenome: "",
};
