import {
    FETCH_ANIME_DATA_START,
    FETCH_ANIME_DATA_SUCCESS,
    FETCH_ANIME_DATA_FAILURE,
} from "../actions/index.js";


// initial state data 
const initialState = {
    episodes: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_ANIME_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_ANIME_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                episodes: action.payload,
                error: ''
            };
        case FETCH_ANIME_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
        }
};