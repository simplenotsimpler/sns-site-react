import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

const fetchProjects = async () => {
  const { data } = await axios.get(`${BASE_URL}/projects`);
  return data;
};

export function useProjects() {
  return useQuery(["projects"], fetchProjects);
}