export enum BaseApiEnum {
    Login,
    PessoaFisica,
    AnaliseAgendamento,
    PessoaFisicaDescricao = "pessoafisica",
    AnaliseAgendamentoDescricao = "agendamentodeservico",
    LoginDescricao = "login"
}
interface BaseApi {
    id: BaseApiEnum;
    description: string;
    baseUrl: string;
}

export function getBaseApiById(baseApiId: BaseApiEnum): BaseApi { return BaseApiMapping.filter(base => base.id === baseApiId)[0]; }

export const BaseApiMapping = [
    { id: BaseApiEnum.PessoaFisica, description: BaseApiEnum.PessoaFisicaDescricao.toString(), baseUrl: 'http://localhost:9001/api/' },
    { id: BaseApiEnum.AnaliseAgendamento, description: BaseApiEnum.AnaliseAgendamentoDescricao.toString(), baseUrl: 'http://localhost:9001/api/' },
    { id: BaseApiEnum.Login, description: BaseApiEnum.LoginDescricao.toString(), baseUrl: 'http://localhost:9000/api/' },
];