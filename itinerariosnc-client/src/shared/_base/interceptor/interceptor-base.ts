import Axios, { AxiosStatic, AxiosInstance } from 'axios';
import { BaseApiEnum, getBaseApiById } from '../enums/base-api-enum';

export abstract class HttpInterceptorBase {

    private _httpClient!: AxiosInstance;
    private _jwtToken: string | undefined;
    private _path!: string;

    constructor(baseApiKey: BaseApiEnum) {
        this._path = getBaseApiById(baseApiKey).description;
        this._httpClient = this.getNewHttpClient(Axios);
        Axios.get("http://localhost:9001/api/base/getToken").then(response => {
            this._jwtToken = response.data
            this.setConfiguration(this._jwtToken, this._path);
        }, 
        reject => { console.log(reject); }
        );
    }

    private setConfiguration(jwtToken: string | undefined, path: string): void {
        this._httpClient.interceptors.request.use(config => {
            config.headers.Authorization = jwtToken;
            config.url = `http://localhost:9001/api/${path}`;
            return config;
        });
    }
    
    private getNewHttpClient = (Axios: AxiosStatic): AxiosInstance => Axios.create();
    
    protected get httpClient(): AxiosInstance {
        this.setConfiguration(this._jwtToken, this._path);
        return this._httpClient;
    }

    protected set httpClient(value: AxiosInstance) {
        this._httpClient = value;
    }

    protected get path() : string  {
        return this._path;
    }
    protected set path(value) {
        this._path = value;
    }
}