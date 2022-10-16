import { axiosClient } from "../apiClient";

/**
 * @description wrapper method for fetching the star wars movies by
 * @param {string} format
 * @return {Promise} promise
 */
export function getMoviesByFormat(format:string){
    return axiosClient.get(`films/?format=${format}`);
}
