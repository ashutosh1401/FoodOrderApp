import Cookies from "js-cookie";
import {
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT
} from "../constants/userConstants"
const { default: Axios } = require("axios");

const siginin = (email,password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {email,password}
    })

    try {
        const {
            data
        } = await Axios.post(
            '/api/users/login', 
            {email,password}
            )
            console.log(data)
            dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
            Cookies.set("userInfo", JSON.parse(JSON.stringify(data)));
    } catch (e) {
        dispatch({type: USER_SIGNIN_FAIL, payload: e.message})
        console.log(e.message)
    }
}

const register = (name,email,password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {name,email,password}
    })

    try {
        const {
            data
        } = await Axios.post(
            "/api/users/register",
            {name,email,password}
        )

        dispatch({type: USER_REGISTER_SUCCESS, payload: data})
        Cookies.set("userInfo", JSON.parse(JSON.stringify(data)));
    } catch (e) {
        dispatch({type: USER_REGISTER_FAIL, payload: e.message})
    }
}

const logout = () => (dispatch) => {
    Cookies.remove("userInfo");
    dispatch({ type: USER_LOGOUT });
};

export {siginin,register,logout}