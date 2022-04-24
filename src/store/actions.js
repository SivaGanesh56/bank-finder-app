import { SET_CATEGORY, SET_CITY, SET_DATA, SET_FAVOURTIE, SET_RAW_DATA } from "./constants";

export const setRawData = (data) => {
    return {
        type: SET_RAW_DATA,
        payload: data
    };
};

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    };
};

export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city
    };
};

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    };
};

export const setFavourite = (id) => {
    return {
        type: SET_FAVOURTIE,
        payload: id
    };
};