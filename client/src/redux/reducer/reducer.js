import {
  FILTER,
  FILTER_PRICE,
  GET_DETAILS,
  GET_COUNTRIES,
  GET_CITIES,
  GET_CITIES_FEATURED,
  GET_CITY,
  GET_VEHICLES,
  GET_COMMENTS,
  USER_FAVORITES,
  REMOVE_FAVORITES,
  POST_MAIL,
  GET_PAYMENT,
  LOGIN_USER,
  LOGIN_USER_AUTH0,
  STATUS_LOGIN,
  EXIT_SESION,
  GET_ALL_USERS,
  REFRESH_AUTH,
  ADD_USER,
  VEHICLE_FAVORITE,
  DELETE_STATES,
  GET_RENTS,
  EDIT_USER,
  REFRESH_USER
} from "../actions/actions";

const initialState = {
  vehiclesCopy: [],
  vehiclesByCity: [],
  allVehicles: [],
  favorites: [],
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
  details: [],
  city: [],
  comments: [],
  payment: [],
  users: [],
  rents: [],
  statusLogin: true,
  user: null,
};

//Inicio localStorage

if (localStorage.getItem("favoriteItems")) {
  initialState.favorites = JSON.parse(localStorage.getItem("favoriteItems"));
} else {
  initialState.favorites = [];
}

//Fin localStorage

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    // Borrado de store
    case DELETE_STATES:
      return {
        ...state,
        vehiclesCopy: [],
        vehiclesByCity: [],
        city: [],
      };
    // Borrado del store
    case GET_RENTS:
      return {
        ...state,
        rents: action.payload,
      };

    case FILTER:
      const filtrados = [];
      let vehiclefiltrado = state.vehiclesCopy;
      state.filters.map((filter) => {
        if (filter.key === action.payload.key) {
          let value = action.payload.value;
          let key = action.payload.key;
          filtrados.push({ key, value });
        } else {
          filtrados.push(filter);
        }
      });

      if (filtrados[1].key === "category" && filtrados[1].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter(
          (v) => v.category === filtrados[1].value
        );
      }
      if (filtrados[0].key === "brand" && filtrados[0].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter(
          (v) => v.brand === filtrados[0].value
        );
      }
      if (filtrados[2].key === "transmition" && filtrados[2].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter(
          (v) => v.transmition === filtrados[2].value
        );
      }
      if (filtrados[3].key === "AC" && filtrados[3].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter((v) => v.air);
      }
      if (filtrados[4].key === "seats" && filtrados[4].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter((v) => v.seats > 4);
      }

      return {
        ...state,
        filters: filtrados,
        vehiclesByCity: vehiclefiltrado,
      };
    case FILTER_PRICE:
      let sortedPrice =  action.payload === "lower"
          ? state.vehiclesByCity.sort((a, b) => a.initialPrice - b.initialPrice)
          : state.vehiclesByCity.sort(
              (a, b) => b.initialPrice - a.initialPrice
            );
      
     
      return {
        ...state,
        vehiclesByCity: sortedPrice,
      };
    //ADD_FAVORITES
    case USER_FAVORITES:
      return {
        ...state,
        favorites: action.payload.length
          ? action.payload
          : { error: "no tiene favoritos" },
      };
    case VEHICLE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case POST_MAIL:
      return {
        ...state,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
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
        vehiclesCopy: action.payload[0].vehicles,
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
        favorites: action.payload,
      };
    case GET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
      };
    case STATUS_LOGIN:
      return {
        ...state,
        statusLogin: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_AUTH0:
      return {
        ...state,
        user: action.payload,
      };
    case EXIT_SESION:
      return {
        ...state,
        user: action.payload,
      };
    case REFRESH_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case REFRESH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return { ...state };
  }
}
