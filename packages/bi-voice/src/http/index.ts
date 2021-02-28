import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const http = createAxios()

function createAxios(option?:any){
    option = Object.assign(
        {},
        {
            baseURL:'',
            timeout:20000,
            messages:{},
            headers: {'Content-type': 'application/json'},
        },
        option,
    )
    
    const instance = axios.create(option);

    //  请求拦截
    instance.interceptors.request.use(
        (config:AxiosRequestConfig) => {
            //todo ...
            return config
        },
        (err:any)=>{
            //请求发送失败拦截
            return Promise.reject(err)
        }
    )

    // const responseHandle = (response: AxiosResponse) => {
    //     const {data,status} = response
    //     if(status === 2000){
    //         return Promise.resolve({
    //             data: response?.data || response
    //         })
    //     }else{
    //         return Promise.resolve('请求失败')
    //     }
    // }
    
    // instance.interceptors.response.use(
    //     responseHandle,
    //     (err:any)=>{
    //         return Promise.resolve(err)
    //     }
    // )
    return instance
}