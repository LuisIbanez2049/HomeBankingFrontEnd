import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction('login', (data) => {
    let usuario = {
        email: data.email,
        name: data[1],
        token: data[0],
        isLoggedIn: true
    }

    return {
        payload: usuario
    }
})

export const logoutAction = createAction('logout')
