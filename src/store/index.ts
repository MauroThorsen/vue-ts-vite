/*
 * @Author: your name
 * @Date: 2021-09-29 17:41:14
 * @LastEditTime: 2021-09-30 11:11:16
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as user, UserStore, UserState } from '@/store/modules/auth'


export interface RootState {
    permission: PermissionState
    user: UserState
}

export type Store = UserStore<Pick<RootState, 'user'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
    plugins,
    modules: {
        user
    }
})

export function useStore(): Store {
    return store as Store
}
