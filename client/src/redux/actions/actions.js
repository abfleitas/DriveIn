export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const FILTER_TRANSMISSION = "FILTER_TRANSMISSION";
export const FILTER_CHARACTERISTICS = "FILTER_CHARACTERISTICS";
export const FILTER_BRAND = "FILTER_BRAND";
export const FILTER_PRICE = "FILTER_PRICE";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const filterCategory = (payload) => {
  return {
    type: "FILTER_CATEGORY",
    payload,
  };
};

export const filterTransmission = (payload) => {
  return {
    type: "FILTER_TRANSMISSION",
    payload,
  };
};

export const filterCharacteristics = (payload) => {
  return {
    type: "FILTER_CHARACTERISTICS",
    payload,
  };
};

export const filterBrand = (payload) => {
  return {
    type: "FILTER_BRAND",
    payload,
  };
};
export const filterPrice = (payload) => {
  return {
    type: "FILTER_PRICE",
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
  return { type: "SETVEHICLEDETAILSSTATE", payload: data };
};
