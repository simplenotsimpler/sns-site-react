import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

export function fetchWork() {
  return axios.get(`${BASE_URL}/work`).then((res) => res.data);
}
