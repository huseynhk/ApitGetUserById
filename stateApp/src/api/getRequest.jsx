import axios from "axios";

const Api = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const GetDatas = async () => {
  try {
    const response = await Api.get("/");
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const GetSingleUser = async (id) => {
  try {
    const response = await Api.get(`/${id}`);
    if (response.status !== 200) {
      throw new Error(response.status);
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
