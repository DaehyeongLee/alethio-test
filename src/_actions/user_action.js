import Axios from 'axios';
import {SIGNUP_USER} from './types';
import { HOST_ADDRESS } from '../components/Config.js';

export function signupUser(dataToSubmit){
    const request = Axios.post(`${HOST_ADDRESS}/sign-up`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: SIGNUP_USER,
        payload: request
    }
}