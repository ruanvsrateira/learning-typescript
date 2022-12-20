/* usando o typeof consigo pegar o tipo de qualquer objeto e pode ser usado como tipo também */
type CoresObj = typeof coresObj;

/* usando o keyof consigo pegar todas as chaves de um tipo e pode ser usado como tipo também */
type ObjChaves = keyof CoresObj;

const coresObj = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
  roxo: "purple",
  ciano: "cian",
};

function traduzirCor(cor: ObjChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor("vermelho", coresObj));
