import { setupServer } from "msw/node";
import { rest } from "msw";
import { API_FORM_URL } from "../constants";

// TODO make reusable for other handlers
export const server = setupServer(
  // Describe network behavior with request handlers.
  // TODO: move the handlers into their own module and
  // import it across your browser and Node.js setups!
  rest.post(API_FORM_URL, (req, res, ctx) => {
    return res(ctx.status(200));
  })
);
