import Axios, { AxiosStatic, AxiosInstance } from 'axios';
import { BaseApiEnum, getBaseApiById } from '../enums/base-api-enum';

export abstract class HttpInterceptorBase {

    private _httpClient!: AxiosInstance;
    private _jwtToken: string | undefined;
    private _path!: string;
    private _baseUrl!: string;

    constructor(baseApiKey: BaseApiEnum) {
        const url = getBaseApiById(baseApiKey);
        this._path = url.description;
        this._baseUrl = url.baseUrl;
        this._httpClient = this.getNewHttpClient(Axios);
    }

    protected setConfiguration(jwtToken: string | undefined, path: string, baseUrl: string): void {
        this._httpClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${jwtToken}`;
            config.url = `${baseUrl}${path}`;
            config.headers.AcceptEnconding = 'gzip, compress';
            return config;
        });
    }
    
    private getNewHttpClient = (Axios: AxiosStatic): AxiosInstance => Axios.create();
    
    protected get httpClient(): AxiosInstance {
        this.setConfiguration(this._jwtToken, this._path, this._baseUrl);
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