import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';


//state = pre, action
export default function (state = {}, action) {
    switch (action.type) {
        //로그인
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }
            break;
        //회원가입
        case REGISTER_USER:
            return {...state, register: action.payload }
            break;
        //그 외 현재 state 유지
        default:
            return state;
    }
}