import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

const fetchBasics = async () => {
  const { data } = await axios.get(`${BASE_URL}/basics`);
  return data;
};

export function useBasics() {
  return useQuery(["basics"], fetchBasics, {
    staleTime: 10 * (60 * 1000), // 10 mins
  });
}
