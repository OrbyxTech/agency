import Axios from "./index.ts";

import { AboutUsResponse } from "./types.ts";

export const getAboutUs = async (): Promise<AboutUsResponse> => {
  try {
    const res = await Axios.get<AboutUsResponse>(
      "/api/about-us?populate[0]=socials&populate[1]=socials.icon",
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
