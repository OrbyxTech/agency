import { useQuery } from "@tanstack/react-query";

import {
  getAboutUs,
  getArticles,
  getFooter,
  getOurTeam,
  getSingleArticle,
} from "../axios/request-handlers.ts";
import { QUERY_KEYS } from "./keys.ts";

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
