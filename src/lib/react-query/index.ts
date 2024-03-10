import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createComment,
  getAboutUs,
  getArticleComments,
  getArticles,
  getFooter,
  getOurTeam,
  getSingleArticle,
  signIn,
  signUp,
} from "../axios/request-handlers.ts";
import { QUERY_KEYS } from "./keys.ts";
import { useAuth } from "../../context/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

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

export const useGetArticles = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.ARTICLES],
    queryFn: getArticles,
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
    mutationKey: [QUERY_KEYS.COMMENTS],
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, id] });
    },
  });

  return { mutate, isLoading };
};
