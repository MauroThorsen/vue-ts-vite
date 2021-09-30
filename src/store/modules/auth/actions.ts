/*
 * @Author: your name
 * @Date: 2021-09-29 17:55:21
 * @LastEditTime: 2021-09-30 15:08:35
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\store\modules\auth\actions.ts
 */
import { ActionTree, ActionContext } from 'vuex'
import { RootState, useStore } from '@/store'
import { state, UserState } from './state'
import { Mutations } from './mutations'
import { UserMutationTypes } from './mutation-types'
import { login } from '@/api/user'
import { RouteRecordRaw } from 'vue-router'
import { setDefaultCookie } from '@/utils/auth'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
    ['ACTION_LOGIN'](
        { commit }: AugmentedActionContext,
        userInfo: { username: string, password: string }
    ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
    async ['ACTION_LOGIN'](
        { commit }: AugmentedActionContext,
        userInfo: { username: string, password: string }
    ) {
        let { username, password } = userInfo
        username = username.trim()
        await login({ username, password }).then(async (res) => {
            // if (res?.code === 0 && res.data.accessToken) {
            //     setDefaultCookie(res.data.accessToken)
            //     commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
            // }
        }).catch((err) => {
            console.log(err)
        })
    },


}