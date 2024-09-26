import { endpoint } from "../../constants/endpoints.api";


export const url:string = 'http://localhost:3000/v1/api';
export const BASE_URL = `${url}`;



export const URL_AUTH_SIGNIN = `${BASE_URL}/${endpoint.LOGIN_ENDPOINT}`;
export const URL_AUTH_CHECK_STATUS = `${BASE_URL}/${endpoint.CHECK_STATUS_ENDPOINT}`;

