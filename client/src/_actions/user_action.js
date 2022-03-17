import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

//로그인
export function loginUser(dataToSubmit) {

    //서버에서 받은 data를 request에 저장
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    //type, response
    return {
        type: LOGIN_USER,
        payload: request
    }
}

//회원가입
export function registerUser(dataToSubmit) {

    //서버에서 받은 data를 request에 저장
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    //type, response
    return {
        type: REGISTER_USER,
        payload: request
    }
}