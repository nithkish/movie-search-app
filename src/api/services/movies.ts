import { axiosClient } from "../apiClient";

export function getMoviesByFormat(format:string){
    return axiosClient.get(`films/?format=${format}`);
}
