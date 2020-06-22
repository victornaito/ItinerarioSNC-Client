export enum BaseApiEnum {
    PessoaFisica,
    AnaliseAgendamento,
    PessoaFisicaDescricao = "pessoafisica",
    AnaliseAgendamentoDescricao = "agendamentodeservico"
}

export function getBaseApiById(baseApiId: BaseApiEnum) { return BaseApiMapping.filter(base => base.id === baseApiId)[0]; }

export const BaseApiMapping = [
    { id: BaseApiEnum.PessoaFisica, description: BaseApiEnum.PessoaFisicaDescricao.toString() }
];