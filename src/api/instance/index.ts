import returnFetch from "return-fetch";

import { CONFIG } from "@/config";

const instance = returnFetch({
  baseUrl: CONFIG.API_URL,
});

export type Instance = typeof instance;

export default instance;
