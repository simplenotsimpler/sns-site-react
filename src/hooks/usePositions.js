import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

//this endpoint only supplies needed fields
const fetchPositions = async () => {
  const { data } = await axios.get(`${BASE_URL}/positions`);
  return data;
};

export function usePositions() {
  return useQuery(["positions"], fetchPositions, {
    staleTime: 10 * (60 * 1000), // 10 mins
  });
}
