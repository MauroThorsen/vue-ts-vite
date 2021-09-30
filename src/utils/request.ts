/*
 * @Author: your name
 * @Date: 2021-09-30 08:22:06
 * @LastEditTime: 2021-09-30 11:06:25
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\utils\request.ts
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'
import qs from 'qs';// 创建axios实例

type Status = 'ok' | 'no'

export interface CustomResponse {
    status: Status;
    data?: any
}
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 5000
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    if (getToken()) {
        // 让每个请求携带自定义token 
        config.headers.Authorization = 'Bearer ' + getToken();
    }
    // 如果请求方式为post，用qs转化为formData格式提交  
    config.method === 'post' ?
        config.data = qs.stringify({ ...config.data }) :
        config.params = { ...config.params };
    return config;
}, (error: AxiosError) => {
    ElMessage({
        message: '请求失败' + error.config,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
});


// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    // 请求不成功，提示信息  
    console.log(response)
    if (response.status !== 200) {
        ElMessage({
            message: '服务器响应错误，响应代码：' + response.status,
            type: 'error',
            duration: 5 * 1000
        })
    }
    try {
        return response.data as CustomResponse;
    }
    catch (error) {
        return response.data
    }
}, (error: AxiosError) => {
    ElMessage({
        message: '请求失败' + (error.code ? (',' + error.code) : ''),
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.resolve(error.response);
});
export default service;


