import Axios from "./index.ts";

import { AboutUsResponse, FooterResponse, OurTeamResponse } from "./types.ts";

export const getAboutUs = async (): Promise<AboutUsResponse> => {
  try {
    const res = await Axios.get<AboutUsResponse>(
      "/api/about-us?populate[0]=socials&populate[1]=socials.icon"
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOurTeam = async (): Promise<OurTeamResponse> => {
  try {
    const res = await Axios.get<OurTeamResponse>(
      "/api/our-team?populate[0]=members&populate[1]=members.image&populate[2]=members.social_links&populate[3]=members.social_links.icon"
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFooter = async (): Promise<FooterResponse> => {
  try {
    const res = await Axios.get<FooterResponse>(
      "/api/footer?populate[0]=Links&populate[1]=Links.links"
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
