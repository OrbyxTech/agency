import Axios from "./index.ts";

import {
  AboutUsResponse,
  ArticleCommentsResponse,
  ArticleResponse,
  FooterResponse,
  OurTeamResponse,
  SingleArticeResponse,
} from "./types.ts";

export const getAboutUs = async (): Promise<AboutUsResponse> => {
  try {
    const res = await Axios.get<AboutUsResponse>(
      "/api/about-us?populate[0]=socials&populate[1]=socials.icon&populate[2]=image"
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

/* -------------------------------------------------------------------------- */
/*                              ARTICLE REQUESTS                              */
/* -------------------------------------------------------------------------- */

export const getArticles = async (): Promise<ArticleResponse> => {
  try {
    const res = await Axios.get<ArticleResponse>(
      "/api/articles?fields[0]=id&fields[1]=name&fields[2]=description&populate[3]=thumbnail"
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleArticle = async (
  id: number | string
): Promise<SingleArticeResponse> => {
  try {
    const res = await Axios.get<SingleArticeResponse>(
      `/api/articles/${id}?populate[0]=author&populate[1]=thumbnail&populate[2]=cover&populate[3]=author`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleComments = async (
  id: number | string
): Promise<ArticleCommentsResponse> => {
  try {
    const res = await Axios.get<ArticleCommentsResponse>(
      `/api/article-comments?populate[author][fields][0]=username&filters[article][id][$eq]=${id}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
