import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

export function fetchEducation() {
  return axios.get(`${BASE_URL}/education`).then((res) => res.data);
}