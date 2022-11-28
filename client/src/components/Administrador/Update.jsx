
import {  FileInput, SelectInput, Edit, SimpleForm, ImageInput, TextInput, NumberInput, BooleanInput } from "react-admin";
import {ImageField } from 'react-admin';
import axios from "axios";

let ImageCloud = ""
const imageCloudChangeHandler = (event) => {
   const imageData = new FormData()
   console.log(event.target.files[0]);
   imageData.append("file", event.target.files[0])
   imageData.append("upload_preset", "DriveIn_users")
   axios.post("https://api.cloudinary.com/v1_1/dbmhbouib/upload", imageData)
   .then(response => {ImageCloud = ( response.data.secure_url)})
};


const validateCreation = (values) => {
   const errors = {};
   return errors;
};




export const Updates = () => (
   
        <Edit title="Edit a User">
           <SimpleForm validate={validateCreation}>
            <TextInput disabled label="Id" source="id" />
              <TextInput disabled source="name" />
              <TextInput disabled source="lastName" />
              <TextInput disabled source="email" />
              {/* <NumberInput source="whatsapp" />
              <TextInput source="password" />
              <input type="file" onChange={imageCloudChangeHandler}></input>
              <TextInput source="photo" value={ImageCloud}/>
              <SelectInput source="role" defaultValue={1} choices={[
               { id: "1", name: 1 },
               { id: "2", name: 2},
               { id: "3", name: 3},
               { id: "4", name: 4}
            ]} /> */}
              <BooleanInput source="active" />
           </SimpleForm>
        </Edit>
    


);

