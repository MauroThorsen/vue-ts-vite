/*
 * @Author: your name
 * @Date: 2021-09-29 17:52:01
 * @LastEditTime: 2021-09-30 14:32:31
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\store\modules\auth\index.ts
 */
import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
} from 'vuex'

// TODO: How to surpass cyclical dependency linting errors cleanly?
import { RootState } from '@/store'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { UserState } from './state'

export { UserState }

export type UserStore<S = UserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
    & {
        commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
            key: K,
            payload: P,
            options?: CommitOptions
        ): ReturnType<Mutations[K]>
    } & {
        dispatch<K extends keyof Actions>(
            key: K,
            payload: Parameters<Actions[K]>[1],
            options?: DispatchOptions
        ): ReturnType<Actions[K]>
    };
export const store: Module<UserState, RootState> = {
    state,
    mutations,
    actions
}