import returnFetch from "return-fetch";

import { CONFIG } from "@/config";

const instance = returnFetch({
  baseUrl: CONFIG.API_URL,
  interceptors: {
    request: async (requestArgs, fetch) => {
      console.log("request", requestArgs);
      return requestArgs;
    },
    response: async (response, requestArgs, fetch) => {
      console.log("response", response);

      if (response.status >= 500) {
        throw new Error("서버 에러");
      }

      if (response.status === 404) {
        throw new Error("영화 정보를 찾을 수 없습니다.");
      }

      return response;
    },
  },
});

export type Instance = typeof instance;

export default instance;
