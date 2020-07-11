export default class UsuarioLogado {
    id: number;
    cpf!: string;
    name!: string;
    
    constructor(id: number, cpf: string, name: string) {
        this.id = id;
        this.cpf = cpf;
        this.name = name;
    }

}