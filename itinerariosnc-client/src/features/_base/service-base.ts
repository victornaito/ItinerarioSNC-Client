import { HttpInterceptorBase } from "./listagem/interceptor/interceptor-base";

export default class ServiceBase<T> extends HttpInterceptorBase {
    
    protected BASE_API_URL = new Map<string, string>();

    constructor(path: string) {
        super(path);
        this.setBaseApiUrl();
    }
    
    public getEntity = (): Promise<T[]> => {
        return this.httpClient.get(this.path);
    }

    private setBaseApiUrl() {
        this.BASE_API_URL.set("PessoaFisica", "pessoafisica");
        this.BASE_API_URL.set("AgendamentoDeServico", "agendamentodeservico");
    }

}