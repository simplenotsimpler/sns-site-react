import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

export function fetchBasics() {
  return axios.get(`${BASE_URL}/basics`).then((res) => res.data);
}