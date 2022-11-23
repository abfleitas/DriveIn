
import { useUpdate, useRecordContext, Create, Edit, SimpleForm, EmailInput, ImageInput, TextInput, NumberInput, BooleanInput } from "react-admin";

export const Updates = () => (
   
        <Edit title="Edit a User">
           <SimpleForm>
            <TextInput disabled label="Id" source="id" />
              <TextInput source="name" />
              <TextInput source="lastName" />
              <TextInput source="email" />
              <NumberInput source="whatsapp" />
              <TextInput source="password" />
              <ImageInput source="photo" />
              <NumberInput source="role" />
              <BooleanInput source="active" />
           </SimpleForm>
        </Edit>
    


);

