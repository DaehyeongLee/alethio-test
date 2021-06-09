import Axios from 'axios';
import {SIGNUP_USER, LOGIN_USER} from './types';
import { HOST_ADDRESS } from '../components/Config.js';

//SignUp Action: 
//백엔드 API : POST /sign-up
export function signupUser(dataToSubmit){
    const request = Axios.post(`${HOST_ADDRESS}/sign-up`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: SIGNUP_USER,
        payload: request
    }
}

//Login Action:
//백엔드 API : POST /login
export function loginUser(dataToSubmit){
    const request = Axios.post(`${HOST_ADDRESS}/login`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}