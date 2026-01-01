import { useInfiniteQuery } from "@tanstack/react-query";
import { SearchRequest } from "../models/search";

const useSearchItem = (params: SearchRequest) => {
    const clientCredentialToken = useClientCredentialToken();

    return useInfiniteQuery({
        queryKey: ['search-item', params],
        queryFn: ({pageParam: 0}) => {
            if(!clientCredentialToken){
                throw new Error('No token available');
            }

            return searchItem(clientCredentialToken, {...params, offset: pageParam});
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {

        }
    })
};

export default useSearchItem;