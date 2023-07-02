import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

const fetchWork = async () => {
  const { data } = await axios.get(`${BASE_URL}/work`);
  return data;
};

export function useWork() {
  return useQuery(["work"], fetchWork);
}