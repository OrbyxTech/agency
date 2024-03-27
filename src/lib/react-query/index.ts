import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createComment,
  deleteComment,
  getAboutUs,
  getArticleComments,
  getArticles,
  getFooter,
  getOurTeam,
  getProjects,
  getSingleArticle,
  getSpecificUserLikeForArticle,
  getSpecificUserLikeForProject,
  likeOrDislikeAProject,
  likeOrDislikeAnArticle,
  orderProject,
  signIn,
  signUp,
} from "../axios/request-handlers.ts";
import { QUERY_KEYS } from "./keys.ts";
import { useAuth } from "../../context/AuthContext.tsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* -------------------------------------------------------------------------- */
/*                                AUTH QUERIES                                */
/* -------------------------------------------------------------------------- */
export const useSignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: [QUERY_KEYS.SIGNUP],
    mutationFn: signUp,
    onSuccess: (data) => {
      login(data.jwt, data.user);
      return navigate("/");
    },
  });

  return { mutate, isLoading: isPending, isSuccess };
};

export const useSignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: [QUERY_KEYS.SIGNIN],
    mutationFn: signIn,
    onSuccess: (data) => {
      login(data.jwt, data.user);
      return navigate("/");
    },
  });

  return { mutate, isLoading: isPending, isSuccess };
};

export const useGetAboutUs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.ABOUT_US],
    queryFn: getAboutUs,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useGetOurTeam = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.OUR_TEAM],
    queryFn: getOurTeam,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useGetFooter = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.FOOTER],
    queryFn: getFooter,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

/* -------------------------------------------------------------------------- */
/*                               ARTICLE QUERIES                              */
/* -------------------------------------------------------------------------- */
export const useGetArticles = ({ searchTerm }: { searchTerm: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.ARTICLES, searchTerm],
    queryFn: () => getArticles({ searchTerm }),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useGetSingleArticle = (id: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.ARTICLES, id],
    queryFn: () => getSingleArticle(id),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

/* -------------------------------------------------------------------------- */
/*                                LIKE QUERIES                                */
/* -------------------------------------------------------------------------- */
export const useLikeOrDislikeArticle = (articleId: number | string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.ARTICLES, "LikeOrDislike"],
    mutationFn: likeOrDislikeAnArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ARTICLES, articleId],
      });
      queryClient.invalidateQueries({
        queryKey: [articleId, "LikeOrDislikeArticleForUser"],
      });
    },
  });

  return { mutate, isLoading };
};

export const useLikeOrDislikeProject = (projectId: number | string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.PROJECTS, "LikeOrDislike"],
    mutationFn: likeOrDislikeAProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PROJECTS],
      });
      queryClient.invalidateQueries({
        queryKey: [projectId, "LikeOrDislikeProjectForUser"],
      });
    },
  });

  return { mutate, isLoading };
};

export const useGetUserLikeForArticle = ({
  userId,
  articleId,
}: {
  userId: string | number;
  articleId: string | number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: [articleId, "LikeOrDislikeArticleForUser"],
    queryFn: () => getSpecificUserLikeForArticle({ userId, articleId }),
  });

  return { data, isLoading };
};

export const useGetUserLikeForProject = ({
  userId,
  projectId,
}: {
  userId: string | number;
  projectId: string | number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: [projectId, "LikeOrDislikeProjectForUser"],
    queryFn: () => getSpecificUserLikeForProject({ userId, projectId }),
  });

  return { data, isLoading };
};

/* -------------------------------------------------------------------------- */
/*                               COMMENT QUERIES                              */
/* -------------------------------------------------------------------------- */
export const useGetArticleComments = (id: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, id],
    queryFn: () => getArticleComments(id),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useCreateComment = (id: number | string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.COMMENTS, "createComment"],
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, id] });
    },
  });

  return { mutate, isLoading };
};

export const useDeleteComment = (id: number | string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.COMMENTS, "deleteComment"],
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, id] });
    },
  });

  return { mutate, isLoading };
};

/* -------------------------------------------------------------------------- */
/*                               PROJECT QUERIES                              */
/* -------------------------------------------------------------------------- */
export const useGetProjects = ({ searchTerm }: { searchTerm: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.PROJECTS, searchTerm],
    queryFn: () => getProjects({ searchTerm }),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

/* -------------------------------------------------------------------------- */
/*                            ORDER PROJECT QUERIES                           */
/* -------------------------------------------------------------------------- */
export const useOrderProject = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: ["OrderProject"],
    mutationFn: orderProject,
    onSuccess: (data) => {
      if ("code" in data) {
        return alert(t("requests.order-project-error-response"));
      } else {
        alert(t("requests.order-project-success-response"));
        return navigate("/");
      }
    },
  });

  return { mutate, isLoading };
};
