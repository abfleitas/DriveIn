import {
  FILTER_TRANSMISSION,
  FILTER_CATEGORY,
  FILTER_CHARACTERISTICS,
  FILTER_BRAND,
  FILTER_PRICE,
  ADD_FAVORITES,
  GET_DETAILS,
  GET_COUNTRIES,
  GET_CITIES,
  GET_CITIES_FEATURED,
} from "../actions/actions";

const initialState = {
  vehiclesCopy: [
    {
      brand: "chevrolet",
      model: "onix",
      score: 4.9,
      airconditioning: true,
      transmition: "manual",
      seats: 5,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 2000,
    },
    {
      brand: "volkswagen",
      model: "cross",
      score: 4.2,
      airconditioning: false,
      transmition: "automatic",
      seats: 4,
      category: "medium",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 2500,
    },
    {
      brand: "ford",
      model: "maverick",
      score: 5,
      airconditioning: true,
      transmition: "manual",
      seats: 4,
      category: "big",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 3500,
    },
    {
      brand: "toyota",
      model: "rav4",
      score: 4.6,
      airconditioning: true,
      transmition: "automatic",
      seats: 6,
      category: "premium",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 3000,
    },
    {
      brand: "chevrolet",
      model: "plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
  ],
  vehicles: [],
  favorites: [],
  vehicleDetailsState: [],
  countries: [],
  cities: [],
  citiesFeatured: [],
};

//Inicio localStorage

if(localStorage.getItem('favorites')) {
  initialState.favorites = JSON.parse(localStorage.getItem('favorites'));
}else{
  initialState.favorites = [];
}

//Fin localStorage

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_CATEGORY:
      function sorted1(action) {
        if (action.payload === "small")
          return state.vehiclesCopy.filter(
            (v) => v.category === action.payload
          );
        if (action.payload === "medium")
          return state.vehiclesCopy.filter(
            (v) => v.category === action.payload
          );
        if (action.payload === "big")
          return state.vehiclesCopy.filter(
            (v) => v.category === action.payload
          );
        if (action.payload === "premium")
          return state.vehiclesCopy.filter(
            (v) => v.category === action.payload
          );
        if (action.payload === "convertible")
          return state.vehiclesCopy.filter(
            (v) => v.category === action.payload
          );
      }
      let sortedCategory = sorted1(action);
      return {
        ...state,
        vehicles: sortedCategory,
      };
    case FILTER_TRANSMISSION:
      function sorted2(action) {
        if (action.payload === "manual")
          return state.vehiclesCopy.filter(
            (v) => v.transmition === action.payload
          );
        if (action.payload === "automatic")
          return state.vehiclesCopy.filter(
            (v) => v.transmition === action.payload
          );
      }
      let sortedTransmission = sorted2(action);
      return {
        ...state,
        vehicles: sortedTransmission,
      };
    case FILTER_CHARACTERISTICS:
      function sorted3(action) {
        if (action.payload === "AC")
          return state.vehiclesCopy.filter((v) => v.airconditioning);
        else return state.vehiclesCopy.filter((v) => v.seats > 4);
      }
      let sortedCharacteristics = sorted3(action);
      return {
        ...state,
        vehicles: sortedCharacteristics,
      };
    case FILTER_BRAND:
      function sorted4(action) {
        return state.vehiclesCopy.filter((v) => v.brand === action.payload);
      }
      let sortedBrand = sorted4(action);
      return {
        ...state,
        vehicles: sortedBrand,
      };
    case FILTER_PRICE:
      function sorted5(action) {
        return action.payload === "lower"
          ? state.vehiclesCopy.sort((a, b) => a.price - b.price)
          : state.vehiclesCopy.sort((a, b) => b.price - a.price);
      }
      let sortedPrice = sorted5(action);
      return {
        ...state,
        vehicles: sortedPrice,
      };

    //ADD_FAVORITES
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case GET_DETAILS:
      return {
        ...state,
        vehicleDetailsState: action.payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case GET_CITIES_FEATURED:
      return {
        ...state,
        citiesFeatured: action.payload,
      };
    default:
      return { ...state };
  }
}
