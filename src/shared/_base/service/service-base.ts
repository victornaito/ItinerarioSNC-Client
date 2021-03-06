import { HttpInterceptorBase } from "../interceptor/interceptor-base";
import { BaseApiEnum } from "../enums/base-api-enum";

export default class ServiceBase<T> extends HttpInterceptorBase {
    
    protected BASE_API_URL = new Map<BaseApiEnum, string>();
    protected BASE_URL = 'http://localhost:9000/api/';

    constructor(baseApiKey: BaseApiEnum) {
        super(baseApiKey);
        this.setBaseApiUrl();
    }
    
    public getAll = (): Promise<T[]> => {
        return this.httpClient.get(this.path);
    }

    public getById = (id: number): Promise<T[]> => {
        return this.httpClient.get(this.path);
    }

    public deleteById = (id: number): Promise<T[]> => {
        return this.httpClient.delete(this.path);
    }

    private setBaseApiUrl() {
        this.BASE_API_URL.set(BaseApiEnum.PessoaFisica, `${this.BASE_URL}${BaseApiEnum.PessoaFisicaDescricao}`);
        this.BASE_API_URL.set(BaseApiEnum.AnaliseAgendamento, `${this.BASE_URL}${BaseApiEnum.AnaliseAgendamentoDescricao}`);
        this.BASE_API_URL.set(BaseApiEnum.Login, `${this.BASE_URL}${BaseApiEnum.LoginDescricao}`);
    }
}