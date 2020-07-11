import ServiceBase from '../_base/service/service-base';
import { BaseApiEnum } from '../_base/enums/base-api-enum';
import UsuarioLogado from '../_base/models/usuario-logado.model';

class LoginService extends ServiceBase<UsuarioLogado> {
    constructor() {
        super(BaseApiEnum.Login);
    }

    login(user: any): Promise<any> {
        const url = this.BASE_API_URL.get(BaseApiEnum.Login) || '';
        return this.httpClient.post('http://localhost:9000/api/login', user).then(s => s.data);
    }
}

const loginService = new LoginService();
export default loginService;