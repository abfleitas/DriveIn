import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput, ImageInput } from "react-admin";

const validateCreation = (values) => {
   const errors = {};
   if (!values.brand) errors.brand = "Escriba la marca";
   else if (!/^[a-zA-Z0-9ñ]+$/.test(values.brand)) {
      errors.brand = "Solo se aceptan letras y numeros";
   }
   if (!values.model) errors.model = "Escriba el modelo";
   else if (!/^[a-zA-Z0-9ñ]+$/.test(values.model)) {
      errors.model = "Solo se aceptan letras y numeros";
   }
   if (!values.year) errors.year = "Escriba el año";
   else if (values.year > 2023 || values.year < 2010) {
      errors.year = "Solo se permite el año entre 2010 y 2023";
   }
   if (!values.color) errors.color = "Escriba el color";
   else if (!/^[a-zA-Zñ]+$/.test(values.color)) {
      errors.color = "Solo se aceptan letras";
   }
   if (!values.transmition) errors.transmition = "Seleccione la transmisión";
   if (values.seats < 2) {
      errors.seats = "Selecione 2 o mas asientos";
   }
   if (!values.category) errors.category = "Escriba la categoría";
   else if (!/^[a-zA-Zñ]+$/.test(values.category)) {
      errors.category = "Solo se aceptan letras";
   }
   if (values.initialPrice < 1) {
      errors.initialPrice = "Precio tiene que ser mayor a 1";
   }
   if (!values.cityId) errors.cityId = "Escriba la ciudad";
   // else if (!/^[a-zA-Zñ]+$/.test(values.cityId)) {
   //    errors.cityId = "Solo se aceptan letras";
   // }
   return errors;
};

export const UpdateVehicle = () => (
   <Edit title="Edit a vehicle">
      <SimpleForm validate={validateCreation}>
         <NumberInput disabled label="Id" source="id" />
         <TextInput source="brand" />
         <TextInput source="model" />
         <NumberInput source="year" />
         <TextInput source="color" />
         <TextInput source="transmition" />
         <BooleanInput source="air" />
         <NumberInput source="seats" />
         <TextInput source="category" />
         <ImageInput source="photo" />
         <BooleanInput source="availability" />
         <NumberInput source="initialPrice" />
         <NumberInput source="cityId" />
      </SimpleForm>
   </Edit>
);