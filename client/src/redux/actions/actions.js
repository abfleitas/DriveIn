import axios from "axios";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const FILTER_TRANSMISSION = "FILTER_TRANSMISSION";
export const FILTER_CHARACTERISTICS = "FILTER_CHARACTERISTICS";
export const FILTER_BRAND = "FILTER_BRAND";
export const FILTER_PRICE = "FILTER_PRICE";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES = "GET_CITIES";
export const GET_CITIES_FEATURED = "GET_CITIES_FEATURED";

export const filterCategory = (payload) => {
  return {
    type: FILTER_CATEGORY,
    payload,
  };
};

export const filterTransmission = (payload) => {
  return {
    type: FILTER_TRANSMISSION,
    payload,
  };
};

export const filterCharacteristics = (payload) => {
  return {
    type: FILTER_CHARACTERISTICS,
    payload,
  };
};

export const filterBrand = (payload) => {
  return {
    type: FILTER_BRAND,
    payload,
  };
};
export const filterPrice = (payload) => {
  return {
    type: FILTER_PRICE,
    payload,
  };
};
//Action agregar auto a favoritos.
export const addFavorites = (auto) => {
  const favorite = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];
    const duplicates = favorite.filter(favoriteItem => favoriteItem.id === auto.id)
    if(duplicates.lenght === 0){
      const vehicleToAdd = {
        ...auto,
        count: 1
      }
      favorite.push(vehicleToAdd);
      localStorage.setItem('favorite', JSON.stringify('favorite'))
    }
  return {
    type: "ADD_FAVORITES",
    payload: auto,
  };
};

export const setVehicleDetailsState = (data) => {
  return { type: GET_DETAILS, payload: data };
};

export const getCountries = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/country").then(
      (response) => {
        dispatch({ type: GET_COUNTRIES, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const getCities = (country) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/cities?country=${country}`).then(
      (response) => {
        dispatch({ type: GET_CITIES, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const getCitiesFeatured = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/cities/destacadas").then(
      (response) => {
        dispatch({ type: GET_CITIES_FEATURED, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};
