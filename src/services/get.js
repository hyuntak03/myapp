import axios from 'axios';

let axiosConfig  = {
    headers: {
        'Content-Type': "applicantion/json: charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }
};

export function getMsg(){
    return axios.get('http://localhost:8080/msg/',{
    //  return axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        params: {
            name: 'Hyuntak',
        },
        axiosConfig
    });
}