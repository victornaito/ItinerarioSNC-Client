import ServiceBase from '../_base/service/service-base';
import PessoaFisica from '../_base/models/pessoa-fisica.model';
import { BaseApiEnum } from '../_base/enums/base-api-enum';

export class PessoaFisicaService extends ServiceBase<PessoaFisica> {
    constructor() {
        super(BaseApiEnum.PessoaFisica);
    }
}