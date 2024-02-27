import useSWR from "swr";

import { getAboutUs, getOurTeam } from "../axios/request-handlers.ts";

export const useGetAboutUs = () => {
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    "about-us",
    getAboutUs,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, isValidating, error, mutate };
};

export const useGetOurTeam = () => {
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    "our-team",
    getOurTeam,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, isValidating, error, mutate };
};
