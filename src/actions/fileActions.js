// import axios from '../service/axios';
import {
    GET_DATA
} from './actionConstants';
import { fileData } from '../utils/data';

export const getFileData = () => (dispatch) => {
    dispatch({
        type: GET_DATA,
        payload: fileData
    })
}