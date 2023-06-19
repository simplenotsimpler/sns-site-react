import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

export function fetchSkills() {
  return axios.get(`${BASE_URL}/skills`).then((res) => res.data);
}
