import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface AURequestInterceptors<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (res: T) => T;
    responseInterceptorCatch?: (error: any) => any;
}
export interface AURequestConfig<T = AxiosResponse> extends  AxiosRequestConfig{
    interceptors?: AURequestInterceptors<T>;
}
