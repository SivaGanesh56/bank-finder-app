import { SET_CATEGORY, SET_CITY, SET_DATA, SET_FAVOURTIE, SET_RAW_DATA } from "./constants";
import { buildData } from "./utils";

const INITIAL_STATE = {
    rawData: [],
    data: [],
    city: '',
    category: '',
};


const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RAW_DATA:
            return {
                ...state,
                rawData: action.payload,
            };
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case SET_FAVOURTIE:

            return {
                ...state,
                rawData: buildData(state.rawData, action.payload),
                data: buildData(state.data, action.payload),
            }
        default:
            return state;
    }
};

export default Reducer;
