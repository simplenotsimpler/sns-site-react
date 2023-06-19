import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

export function fetchProjects() {
  return axios
    .get(`${BASE_URL}/projects`)
    .then((res) => res.data);
}
