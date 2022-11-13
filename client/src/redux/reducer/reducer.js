import {
  FILTER,
  FILTER_PRICE,
  ADD_FAVORITES,
  GET_DETAILS,
  GET_COUNTRIES,
  GET_CITIES,
  GET_CITIES_FEATURED,
  GET_CITY,
  GET_VEHICLES,
  GET_COMMENTS,
  REMOVE_FAVORITES,
} from "../actions/actions";

const initialState = {
  vehiclesCopy: [],
  vehiclesByCity: [],
  allVehicles: [],
  favorites: [],
  vehicleDetailsState: [],
  filters: [
    { key: "brand", value: "all" },
    { key: "category", value: "all" },
    { key: "transmition", value: "all" },
    { key: "AC", value: "all" },
    { key: "seats", value: "all" },
  ],
  countries: [],
  cities: [],
  citiesFeatured: [],
  city: [],
  comments: [],
};

//Inicio localStorage

if (localStorage.getItem("favorites")) {
  initialState.favorites = JSON.parse(localStorage.getItem("favorites"));
} else {
  initialState.favorites = [];
}

//Fin localStorage

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      const filtrados = [];
      let vehiclefiltrado = state.vehiclesByCity;
      state.filters.map((filter) => {
        if (filter.key === action.payload.key) {
          let value = action.payload.value;
          let key = action.payload.key;
          filtrados.push({ key, value });
        } else {
          filtrados.push(filter);
        }
      });

      // if (filtrados[1].key === "category" && filtrados[1].value !== "all") {
      //   vehiclefiltrado = vehiclefiltrado.filter(
      //     (v) => v.category === filtrados[1].value
      //   );
      // }
      if (filtrados[0].key === "brand" && filtrados[0].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter(
          (v) => v.brand === filtrados[0].value
        );
      }
      // if (filtrados[2].key === "transmition" && filtrados[2].value !== "all") {
      //   vehiclefiltrado = vehiclefiltrado.filter(
      //     (v) => v.transmition === filtrados[2].value
      //   );
      // }
      // if (filtrados[3].key === "AC" && filtrados[3].value !== "all") {
      //   vehiclefiltrado = vehiclefiltrado.filter((v) => v.airconditioning);
      // }
      // if (filtrados[4].key === "seats" && filtrados[4].value !== "all") {
      //   vehiclefiltrado = vehiclefiltrado.filter((v) => v.seats > 4);
      // }

      return {
        ...state,
        filters: filtrados,
        vehicles: vehiclefiltrado,
        vehiclesByCity: vehiclefiltrado
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

    case GET_VEHICLES:
      return {
        ...state,
        allVehicles: action.payload,
      };
    case GET_CITY:
      return {
        ...state,
        vehiclesByCity: action.payload[0].vehicles,
        city: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== action.payload),
      };

    default:
      return { ...state };
  }
}
