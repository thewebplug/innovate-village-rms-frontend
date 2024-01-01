import axios from "axios";

export const login = async (
    email,
    password
  ) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/login`, {
        email,
        password
      });
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };