import { axiosClient } from "../apiClient";

export function getMoviesByFormat(format){
    return axiosClient.get(`films/?format=${format}`);
}
