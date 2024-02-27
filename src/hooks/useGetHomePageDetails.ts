import { useQuery } from "@tanstack/react-query";
import getHomePagedetails from "../utils/http/getHomePagedetails";

const useGetHomePageDetails = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: getHomePagedetails,
    refetchOnWindowFocus: false,
  });

  return {
    homePageDetails: data,
    homePageDetailsError: error,
    isHomePageDetailsLoading: isLoading,
  };
};

export default useGetHomePageDetails;
