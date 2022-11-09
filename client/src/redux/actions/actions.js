
export const filterCategory = (payload) => {
   return {
      type: "FILTER_CATEGORY",
      payload
   };
};

export const filterTransmission = (payload) => {
   return {
      type: "FILTER_TRANSMISSION",
      payload
   };
};

export const filterCharacteristics = (payload) => {
   return {
      type: "FILTER_CHARACTERISTICS",
      payload
   };
};

export const filterBrand = (payload) => {
   return {
      type: "FILTER_BRAND",
      payload
   };
};
export const filterPrice = (payload) => {
   return {
      type: "FILTER_PRICE",
      payload
   };
};