import { API_FORM_URL } from "../constants";

type FormPayload = {
  name: string;
  email: string;
  password: string;
  state: string;
  occupation: string;
};

// TODO error handling?
export const postFormData = (payload: FormPayload) =>
  fetch(API_FORM_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
