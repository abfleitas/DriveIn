import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput, ImageInput } from "react-admin";

export const UpdateVehicle = () => (
   <Edit title="Edit a vehicle">
      <SimpleForm>
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