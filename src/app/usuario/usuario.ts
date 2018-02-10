export class Usuario {
    id: number;
    login: string;
    nome: string;
    cpf: string;
    email: string;
    endereco: string;
    senha: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
