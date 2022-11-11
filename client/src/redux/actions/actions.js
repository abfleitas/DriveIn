
export const FILTER = "FILTER";
export const FILTER_PRICE = "FILTER_PRICE";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const filter = (payload) => {
  return {
    type: "FILTER",
    payload
  }
}

export const filterPrice = (payload) => {
  return {
    type: "FILTER_PRICE",
    payload,
  };
};
//Action agregar auto a favoritos.
export const addFavorites = (auto) => {
   return {
      type: 'ADD_FAVORITES',
      payload: auto
   }
};

export const setVehicleDetailsState = (data) => {
  return { type: "SETVEHICLEDETAILSSTATE", payload: data};
}