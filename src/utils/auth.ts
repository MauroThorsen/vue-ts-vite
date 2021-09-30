/*
 * @Author: Mashiro
 * @Date: 2021-09-30 10:07:59
 * @LastEditTime: 2021-09-30 15:09:38
 * @LastEditors: Mashiro
 * @FilePath: \vue-ts-vite\src\utils\auth.ts
 */
const key: string = 'vue-ts-vite';
// interface Auth {
//     (key: string, token: string, age: number, path: string): void;
// }

export function setDefaultCookie(token: string): void {
    let d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${key}=${token};expires=${expires};path=/`;
}
export function setToken(setKey: string, token: string, age: number, path: string) {
    let d = new Date();
    d.setTime(d.getTime() + (age * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${setKey}=${token};expires=${expires};path=${path}`;
}
export function getToken(searchKey?: string): string {
    let list = document.cookie.split(';')
    for (let i = 0; i < list.length; i++) {
        let str = list[i].split('=')
        if (str[0].toString() === searchKey || key) {
            return str[1]
        }
    }
    return ''
}
export function removeToken(delKey?: string): void {
    document.cookie = `${delKey || key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}