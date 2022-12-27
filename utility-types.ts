type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

/* Record - Você define dentro da tag, o tipo da chave e depois o tipo do valor */

type PessoaRecord = Record<string, string | number>;

/* Required - Ele define todos os campos que não são required como required */

type PessoaRequired = Required<PessoaProtocol>;

/* Partial - Ele define todos os campos que são required e transforma em opcional */

type PessoaParcial = Partial<PessoaProtocol>;

/* Readonly - Ele define todos os campos como readonly */

type PessoaReadonly = Readonly<PessoaProtocol>;

/* Pick - Ele pega os seguintes campos de um tipo */

type PessoaPick = Pick<PessoaProtocol, "nome" | "sobrenome">;

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

/* Ele computa os tipos que estão em ABC, Mas não esta no tipo CDE no caso */
type PessoaExtract = Extract<ABC, CDE>;

/* Ele computa os tipos que estão em ABC, e se repetem no tipo CDE no caso */
type PessoaExclude = Exclude<ABC, CDE>;
