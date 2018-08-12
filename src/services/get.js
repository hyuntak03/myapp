import axios from 'axios';

let axiosConfig  = {
    headers: {
        'Content-Type': "applicantion/json: charset=UTF-B",
        "Access-Controlo-Allow_Origin": "*",
    }
};

export function getMsg(){
 //   return axios.get('http://localhost:8080/',{
     return axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        params: {

        },
        axiosConfig
    });
}