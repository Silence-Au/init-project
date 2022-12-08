import auReuqest from "@/service";
import DataType from "../interface";
export default {
    login(data: object): Promise<any> {
        return auReuqest.post<DataType>({
            url: "/ppfm/pep/web/backend/user/login",
            data
        });
    },
    logout(data: object): Promise<any> {
        return auReuqest.post<DataType>({
            url: "/ppfm/pep/web/backend/user/logout",
            data
        });
    },
    getInit(): Promise<any> {
        return auReuqest.get<DataType>({
            url: "/aohe/init",
        });
    }
};
