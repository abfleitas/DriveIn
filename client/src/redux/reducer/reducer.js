import { FILTER, ADD_FAVORITES, FILTER_PRICE } from "../actions/actions";

const initialState = {
  vehiclesCopy: [],
  vehicles: [],
  favorites:[],
  vehicleDetailsState : [],
  filters: [{key:"brand", value:"all"},{key:"category", value:"all"},{key:"transmition", value:"all"},{key:"AC", value:"all"},{key:"seats", value:"all"}]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      const filtrados = [];
      let vehiclefiltrado = state.vehiclesCopy;
      state.filters.map(filter => {
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
    case "SETVEHICLEDETAILSSTATE":
      return {
        ...state,
        vehicleDetailsState: action.payload
      }
    default:
      return { ...state };
  }
}
