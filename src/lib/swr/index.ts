import useSWR from "swr";

import { getAboutUs } from "../axios/request-handlers.ts";

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
