import { API_FORM_URL } from "../constants";
import { FormData } from "../types";

export const getFormData = async (): Promise<FormData> => {
  // TODO error handling?
  const res = await fetch(API_FORM_URL);
  return res.json();
};
