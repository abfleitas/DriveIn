import React from "react";
import { Create, SimpleForm, EmailInput, ImageInput, TextInput, NumberInput, BooleanInput } from "react-admin";

const CreateUser = () => {
   return (
      <Create title="Create a User">
         <SimpleForm>
            <TextInput source="name" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <NumberInput source="whatsapp" />
            <TextInput source="password" />
            <ImageInput source="photo" />
            <NumberInput source="role" />
            <BooleanInput source="active" />
         </SimpleForm>
      </Create>
   );
};

export default CreateUser;