import { createReducer } from "@reduxjs/toolkit"
import { loginAction } from "../actions/authenticationAction"

const initialState = {
    isLoggedIn: false,
    token: null,
    email: null,
    name: null
}

const authenticationReducer = createReducer(initialState, (builder) => {
    builder.addCase(loginAction, (state, action) => {
        return {
            ...state, 
            isLoggedIn: action.payload.isLoggedIn,
            token: action.payload.token,
            email: action.payload.email,
            name: action.payload.name
        }
    })
}) 

export default authenticationReducer