import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";

export const searchItem = async() => {
    try {
        const response = await axios.get(`${SPOTIFY_BASE_URL}/`)
    } catch (error) {
        throw new Error('Fail to fetch search');
    }
};