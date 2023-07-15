import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URI;

//this endpoint only supplies needed fields
const fetchPositions = async () => {
  const { data } = await axios.get(`${BASE_URL}/positions`);
  return data;
};

const fetchPositionsForResume = async () => {
  const { data } = await axios.get(`${BASE_URL}/positions`);
  const positionsForResume = data.filter(
    (position) => position.showOnResume === true
  );
  return positionsForResume;
};

const fetchPositionsForITResume = async () => {
  const { data } = await axios.get(`${BASE_URL}/positions`);
  const positionsForResume = data.filter(
    (position) => position.showOnITResume === true
  );
  return positionsForResume;
};

export function usePositions() {
  return useQuery(["positions"], fetchPositions, {
    staleTime: 10 * (60 * 1000), // 10 mins
  });
}

export function usePositionsForResume() {
  return useQuery(["positionsForResume"], fetchPositionsForResume, {
    staleTime: 10 * (60 * 1000), // 10 mins
  });
}

export function usePositionsITForResume() {
  return useQuery(["positionsForITResume"], fetchPositionsForITResume, {
    staleTime: 10 * (60 * 1000), // 10 mins
  });
}
