/*
 * @Author: your name
 * @Date: 2021-09-30 08:33:28
 * @LastEditTime: 2021-09-30 10:02:55
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\api\user.ts
 */
import request from '@/utils/request';
import { Method } from 'axios'
// 登录接口
export const login = (data: any) => {
    return request({
        url: '/v1/auth/login' as string,
        method: 'post' as Method,
        data
    });
};

export const test = (data?: any) => {
    return request({
        url: '' as string,
        method: 'get' as Method,
        data
    });
};