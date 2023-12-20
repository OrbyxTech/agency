
import useSWR from "swr"
import getHomePagedetails from "../utils/http/getHomePagedetails"

const useGetHomePageDetails = () => {
    const {
        data, error, isLoading, isValidating, mutate
    } = useSWR(
        "/",
        async () => await getHomePagedetails(),
        {
            shouldRetryOnError: false,
            revalidateOnFocus: false,
            errorRetryCount: 0
        }
    )

    return {
        homePageDetails: data,
        homePageDetailsError: error,
        isHomePageDetailsLoading: isLoading,
        isHomePageDetailsValidating: isValidating,
        mutateHomePageDetails: mutate
    }
}

export default useGetHomePageDetails