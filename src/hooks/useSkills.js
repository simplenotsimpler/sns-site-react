import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

const fetchSkills = async () => {
  const { data } = await axios.get(`${BASE_URL}/skills`);
  return data;
};

export function useSkills() {
  return useQuery(["skills"], fetchSkills, { 
    staleTime: 10 * (60 * 1000), // 10 mins 
  });
}