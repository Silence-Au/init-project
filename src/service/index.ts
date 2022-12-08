import AURequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
 const auReuqest = new AURequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            const token = "";
            if (token) {
                config.headers!.Authorization = token;
            }
            return config;
        },
        requestInterceptorCatch: (err) => {
            return err;
        },
        responseInterceptor: (config) => {
            return config;
        },
        responseInterceptorCatch: (err) => {
            return err;
        },
    },
});
export default auReuqest
