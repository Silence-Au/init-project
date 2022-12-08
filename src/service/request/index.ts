import axios from "axios";
import type { AxiosInstance } from "axios";
import type { AURequestInterceptors, AURequestConfig } from "./type";

export default class AURequest {
    instance: AxiosInstance;
    interceptors?: AURequestInterceptors;
    constructor(config: AURequestConfig) {
        // 创建axios实例
        this.instance = axios.create(config);
        //保存基本信息
        this.interceptors = config.interceptors;
        //使用拦截器
        //从config中取出的拦截器是对应的实例的拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.requestInterceptorCatch
        );

        // 所有实例都有的拦截器
        //请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (err) => {
                return err;
            }
        );
        //响应拦截器
        this.instance.interceptors.response.use(
            (res) => {
                return res.data;
            },
            (err) => {
                //例子:判断不同httpErrorCode显示不同错误信息
                if (err.response.status === 404) {
                    console.log("404");
                }
                return err;
            }
        );
    }
    request<T>(config: AURequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config);
            }
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors?.responseInterceptor(res);
                    }
                    console.log(res);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                    return err;
                });
        });
    }

    get<T>(config: AURequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "GET" });
    }
    post<T>(config: AURequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "POST" });
    }
    delete<T>(config: AURequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "DELETE" });
    }
    patch<T>(config: AURequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "PATCH" });
    }
}
