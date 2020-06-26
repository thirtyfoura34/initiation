import { getRequest, postRequest } from "utils/requests";
import { SIGN_IN_API_URL, GET_DOMAIN_API_URL } from "utils/constants";

interface ISignInData {
  username: string;
  password: string;
}

export const signInRequest = (signInData: ISignInData) => {
  return postRequest({ url: SIGN_IN_API_URL, data: signInData });
};

export const getDomainRequest = () => {
  return getRequest({ url: GET_DOMAIN_API_URL });
};
