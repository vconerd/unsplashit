import axios from "axios";

export const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 15000
});

export const apiClientId = "M4h2fLH0CUHf2ifsx3jUJEgPuUff1nO4sgnVlkPJf84";

