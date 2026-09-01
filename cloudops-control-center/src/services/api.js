import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getMetrics = () => API.get("/metrics");
export const simulateLoad = () => API.post("/simulate");
