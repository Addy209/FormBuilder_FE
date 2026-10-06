import axios from "axios";
import { create_user_url, ping_url } from "./API_URLs";

export const pingUser = async () => {
  try {
    const resp = await axios.get(ping_url);
    return resp.data;
  } catch (err) {
    console.error("Error piningig the server: ", err);
  }
};

export const createUser = async (name) => {
  try {
    const resp = await axios.post(create_user_url, { name: name });
    return resp.data;
  } catch (err) {
    console.error("Error creating user: ", err);
  }
};
