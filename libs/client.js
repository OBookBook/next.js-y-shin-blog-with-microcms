import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-tutorial-nextjs00",
  apiKey: process.env.API_KEY,
});
