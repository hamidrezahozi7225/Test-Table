import axios from "axios";


export function GetApiStore() {
    return axios.get("https://fakestoreapi.com/products")
}