// src/api/index.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});



// API functions
export const getChallenges = async () => {
  const res = await api.get("/api/challenges");
  return res.data.data; // assuming { data: [...] }
};

export const getChallenge = async (id) => {
  const res = await api.get(`/api/challenges/${id}`); // ✅ FIXED HERE
  return res.data.data;
};

export const createChallenge = async (challenge) => {
  const res = await api.post("/api/challenges", challenge);
  return res.data.data;
};
