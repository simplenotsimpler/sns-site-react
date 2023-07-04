import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

const fetchEducation = async () => {
  const { data } = await axios.get(`${BASE_URL}/education`);
  return data;
};

export function useEducation() {
  return useQuery(["education"], fetchEducation, { 
    staleTime: 10 * (60 * 1000), // 10 mins 
  });
}