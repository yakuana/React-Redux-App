import axios from 'axios';

export const FETCH_ANIME_DATA_START = 'FETCH_ANIME_DATA_START';
export const FETCH_ANIME_DATA_SUCCESS = 'FETCH_ANIME_DATA_SUCCESS';
export const FETCH_ANIME_DATA_FAILURE = 'FETCH_ANIME_DATA_FAILURE';

export const getAnimeData = () => dispatch => {

    // loading data 
    dispatch({ type: FETCH_ANIME_DATA_START });
    
    axios
        .get('https://api.oceandrivers.com:443/v1.0/getWebCams/')
        .then(response => {
            // successful 
            console.log("response data", response.data)
            // dispatch({ type: FETCH_ANIME_DATA_SUCCESS, payload: res.data.data });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_ANIME_DATA_FAILURE, payload: error.response });
        });
};
