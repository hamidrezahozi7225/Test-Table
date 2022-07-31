import axios from "axios";

const api="https://jsonplaceholder.typicode.com/posts"
export function GetApi() {
    return axios.get(api)
}
export function deleteApi(userID) {
    return axios.delete(api+"/"+userID)
}