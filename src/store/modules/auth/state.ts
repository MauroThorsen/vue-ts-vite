/*
 * @Author: your name
 * @Date: 2021-09-29 17:53:04
 * @LastEditTime: 2021-09-30 11:14:17
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\store\modules\auth\state.ts
 */
// import { getToken } from '@/utils/cookies'

export interface UserState {
    token: string
    name: string
    introduction: string
    roles: string[]
}

export const state: UserState = {
    token: '',
    name: '',
    introduction: '',
    roles: []
}
