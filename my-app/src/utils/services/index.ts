import axios from "axios";

interface IRequestData {
  url: string;
  data?: any;
}

export const postRequest = (requestData: IRequestData) => {
  return axios.post(requestData.url, requestData.data);
};

export const getRequest = (requestData: IRequestData) => {
  return axios.get(requestData.url);
};
