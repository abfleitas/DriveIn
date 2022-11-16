import axios from "axios";
export const FILTER = "FILTER";
export const FILTER_PRICE = "FILTER_PRICE";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES = "GET_CITIES";
export const GET_CITIES_FEATURED = "GET_CITIES_FEATURED";
export const GET_CITY = "GET_CITY";
export const GET_VEHICLES = "GET_VEHICLES";
export const GET_COMMENTS = "GET_COMMENTS";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const POST_MAIL = "POST_MAIL";
export const GET_PAYMENT = "GET_PAYMENT";

export const filter = (payload) => {
  return {
    type: FILTER,
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
export const addFavorites = (data) => {
  //const favoriteItems = localStorage.setItem("favoriteItems", JSON.stringify(data));
  const favoriteItems = localStorage.getItem("favoriteItems")
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [];
  const duplicates = favoriteItems.filter(
    (favoriteItem) => favoriteItem.id === data.id
  );
  if (duplicates.length === 0) {
    const vehicleToAdd = {
      ...data,
      //data,
    };
    favoriteItems.push(vehicleToAdd);
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }
  return {
    type: ADD_FAVORITES,
    payload: data,
  };
};

export const removeFavorites = (id) => {
  const deleteFromFavorites = localStorage.getItem("favoriteItems")
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [];

  const updateFavorites = deleteFromFavorites.filter(
    (items) => items.id !== id
  );

  localStorage.setItem("favoriteItems", JSON.stringify(updateFavorites));

  return { type: REMOVE_FAVORITES, payload: id };
};

// export function setVehicleDetailsState(id) {
//   return async function (dispatch) {
//     try {
//       let detailsJson = await axios.get(`/vehicles/${id}`);
//       console.log("SOY AUTOS", detailsJson.data);
//       return dispatch({
//         type: "GET_DETAILS",
//         payload: detailsJson.data,
//       });
//     } catch (error) {
//       alert("No se encontró ningun Vehículo con ese ID");
//     }
//   };
// }

export function setVehicleDetailsState(id) {
  return function (dispatch) {
    axios.get(`/vehicles/${id}`).then(
      (response) => {
        return dispatch({ type: GET_DETAILS, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
}

export const getCountries = () => {
  return function (dispatch) {
    axios.get("/country").then(
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
    axios.get(`/cities?country=${country}`).then(
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
    axios.get("/cities/destacadas").then(
      (response) => {
        dispatch({ type: GET_CITIES_FEATURED, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const getCity = (id) => {
  return function (dispatch) {
    axios.get(`/cities/${id}`).then(
      (response) => {
        dispatch({ type: GET_CITY, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const getVehicles = () => {
  return function (dispatch) {
    axios.get("/vehicles").then(
      (response) => {
        dispatch({ type: GET_VEHICLES, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const getComments = () => {
  return function (dispatch) {
    axios.get("/comments").then(
      (response) => {
        dispatch({ type: GET_COMMENTS, payload: response.data });
      },
      (error) => {
        return error;
      }
    );
  };
};

export const postComment = (payload) => {
  return function () {
    axios.post("/comments", payload).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  };
};

export const postMails = (content, to, subject) => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.post("/mails", content, to, subject);
      dispatch({ type: POST_MAIL, payload: respuesta });
    } catch (error) {
      console.log(error);
    }
  };
};
