import {
  FILTER,
  FILTER_PRICE,
  ADD_FAVORITES,
  GET_DETAILS,
  GET_COUNTRIES,
  GET_CITIES,
  GET_CITIES_FEATURED,
  REMOVE_FAVORITES,
} from "../actions/actions";

const initialState = {
  vehiclesCopy: [
    {

      brand: "chevrolet",
      model: "onix",

      brand: "Chevrolet",
      model: "Onix",

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
      brand: "Volkswagen",
      model: "Cross",
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
      brand: "Ford",
      model: "Maverick",
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
      brand: "Toyota",
      model: "Rav4",
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
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
      score: 3.5,
      airconditioning: false,
      transmition: "manual",
      seats: 4,
      category: "small",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VV_jdP3L6XORPGvTvDx66wGBDbNIggTqBEG6jDur52A52gLmHheWTb8lq1ACDdL7o84&usqp=CAU",
      price: 1800,
    },
    {
      brand: "Chevrolet",
      model: "Plus",
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
        vehiclefiltrado = vehiclefiltrado.filter((v) => v.airconditioning);
      }
      if (filtrados[4].key === "seats" && filtrados[4].value !== "all") {
        vehiclefiltrado = vehiclefiltrado.filter((v) => v.seats > 4);
      }

      return {
        ...state,
        filters: filtrados,
        vehicles: vehiclefiltrado,
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
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites:state.favorites.filter((el)=>el.id !== action.payload)
      }
    default:
      return { ...state };
  }
}

