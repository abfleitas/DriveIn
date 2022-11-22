import React from "react";
import { Create, SimpleForm, TextInput, NumberInput, BooleanInput } from "react-admin";

const CreateVehicle = () => {
   return (
      <Create title="Create a Vehicle">
         <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <NumberInput source="year" />
            <TextInput source="color" />
            <TextInput source="transmition" />
            <BooleanInput source="air" />
            <NumberInput source="seats" />
            <TextInput source="category" />
            <TextInput source="photo" />
            <BooleanInput source="availability" />
            <NumberInput source="initialPrice" />
            <TextInput source="cityId" />
         </SimpleForm>
      </Create>
   );
};

export default CreateVehicle;