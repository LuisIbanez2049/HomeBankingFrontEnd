import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction('login', (data) => {
    let usuario = {
        email: data.email,
        name: data.fisrstName + ' ' + data.lastName,
        token: data,
        isLoggedIn: true
    }

    return {
        payload: usuario
    }
})
