import axios from "axios";

export const uploadResult = async (
  student,
  result,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_DEV_URL}/result/`,
      {
        student,
        result
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getResult = async (id, token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_DEV_URL}/result/${id}`,
        config
      );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
}