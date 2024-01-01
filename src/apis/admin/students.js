import axios from "axios";

export const registerStudent = async (
  name,
  level,
  email,
  studentClass,
  profilePicture,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_DEV_URL}/student/`,
      {
        name,
        level,
        email,
        studentClass,
        profilePicture,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getStudents = async (page, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DEV_URL}/student/${page}`,
          config
        );
    
        return res;
      } catch (error) {
        console.log("ERROR", error);
        return error?.response;
      }
}
export const searchStudent = async (id, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DEV_URL}/student/single/${id}`,
          config
        );
    
        return res;
      } catch (error) {
        console.log("ERROR", error);
        return error?.response;
      }
}