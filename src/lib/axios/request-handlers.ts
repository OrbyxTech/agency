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
  GetProjectsResponse,
  LikeOrDislikeResponse,
  OrderProjectResponse,
  OurTeamResponse,
  SignInResponse,
  SignUpResponse,
  SingleArticeResponse,
  getUserLikeForArticleResponse,
} from "./types.ts";

/* -------------------------------------------------------------------------- */
/*                                AUTH REQUESTS                               */
/* -------------------------------------------------------------------------- */
export const signUp = async ({
  username,
  email,
  password,
  first_name,
  last_name,
}: SignUpSchemaType) => {
  try {
    const res = await Axios.post<SignUpResponse>("/api/auth/local/register", {
      username,
      email,
      password,
      first_name,
      last_name,
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

export const getArticles = async ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<ArticleResponse> => {
  try {
    const res = await Axios.get<ArticleResponse>(
      `/api/articles?fields[0]=id&fields[1]=name&fields[2]=description&fields[3]=likesCount&fields[4]=dislikesCount&populate[3]=thumbnail&filters[name][$contains]=${searchTerm}`
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

export const likeOrDislikeAnArticle = async ({
  id,
  val,
}: {
  id: string | number;
  val: boolean;
}): Promise<LikeOrDislikeResponse> => {
  try {
    const res = await Axios.post<LikeOrDislikeResponse>(`/api/article-likes`, {
      data: {
        like: val,
        article: {
          connect: [id],
        },
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificUserLikeForArticle = async ({
  userId,
  articleId,
}: {
  userId: string | number;
  articleId: string | number;
}): Promise<getUserLikeForArticleResponse> => {
  try {
    const res = await Axios.get<getUserLikeForArticleResponse>(
      `/api/article-likes?populate[article][fields][0]=id&populate[author][fields][0]=id&filters[author][id][$eq]=${userId}&filters[article][id][$eq]=${articleId}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const likeOrDislikeAProject = async ({
  id,
  val,
}: {
  id: string | number;
  val: boolean;
}): Promise<LikeOrDislikeResponse> => {
  try {
    const res = await Axios.post<LikeOrDislikeResponse>(`/api/project-likes`, {
      data: {
        like: val,
        project: {
          connect: [id],
        },
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificUserLikeForProject = async ({
  userId,
  projectId,
}: {
  userId: string | number;
  projectId: string | number;
}): Promise<getUserLikeForArticleResponse> => {
  try {
    const res = await Axios.get<getUserLikeForArticleResponse>(
      `/api/project-likes?populate[project][fields][0]=id&populate[author][fields][0]=id&filters[author][id][$eq]=${userId}&filters[project][id][$eq]=${projectId}`
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
            connect: [articleId],
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

/* -------------------------------------------------------------------------- */
/*                              PROJECT REQUESTS                              */
/* -------------------------------------------------------------------------- */

export const getProjects = async ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<GetProjectsResponse> => {
  try {
    const res = await Axios.get<GetProjectsResponse>(
      `/api/projects?populate[0]=thumbnail&populate[1]=images&filters[title][$contains]=${searchTerm}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                               ORDER REQUESTS                               */
/* -------------------------------------------------------------------------- */
export interface OrderProjectValues {
  isFree: boolean;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  description: string;
}

export const orderProject = async ({
  isFree,
  first_name,
  last_name,
  email,
  number,
  description,
}: OrderProjectValues): Promise<OrderProjectResponse> => {
  const formData = new FormData();

  formData.append("isFree", String(isFree));
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("email", email);
  formData.append("number", number);
  formData.append("projectDescription", description);

  try {
    const res = await Axios.post<OrderProjectResponse>(
      `/api/project-requests?populate=*`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
