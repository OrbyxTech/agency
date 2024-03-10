import { number } from "zod";
import { SignInSchemaType, SignUpSchemaType } from "../validation/index.ts";
import Axios from "./index.ts";

import {
  AboutUsResponse,
  ArticleCommentsResponse,
  ArticleResponse,
  CreateCommentResponse,
  DeleteCommentResponse,
  FooterResponse,
  OurTeamResponse,
  SignInResponse,
  SignUpResponse,
  SingleArticeResponse,
} from "./types.ts";

/* -------------------------------------------------------------------------- */
/*                                AUTH REQUESTS                               */
/* -------------------------------------------------------------------------- */
export const signUp = async ({
  username,
  email,
  password,
}: SignUpSchemaType) => {
  try {
    const res = await Axios.post<SignUpResponse>("/api/auth/local/register", {
      username,
      email,
      password,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async ({ identifier, password }: SignInSchemaType) => {
  try {
    const res = await Axios.post<SignInResponse>("/api/auth/local", {
      identifier,
      password,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

/* -------------------------------------------------------------------------- */
/*                              COMMENT  REQUESTS                             */
/* -------------------------------------------------------------------------- */
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

export const createComment = async ({
  articleId,
  content,
}: {
  articleId: number | string;
  content: string;
}): Promise<CreateCommentResponse> => {
  try {
    const res = await Axios.post<CreateCommentResponse>(
      `/api/article-comments?populate[0]=article&populate[1]=author`,
      {
        data: {
          content,
          article: {
            connect: articleId,
          },
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (
  id: number | string
): Promise<DeleteCommentResponse> => {
  try {
    const res = await Axios.delete<CreateCommentResponse>(
      `/api/article-comments/${id}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
