import axios from "axios";

export function GetApiTest() {
    return axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
}