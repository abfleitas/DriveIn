import * as React from "react";
import { Admin, Resource, ListGuesser,useDataProvider, useGetMany, fetchUtils  } from 'react-admin';
import simpleRestProvider  from 'ra-data-simple-rest';
import { UserList } from './users';
import {vehiclesList} from './vehicles';
import {rentsList} from './rents'
import { dataProvider } from './dataProvider';
import CreateVehicle from "./CreateVehicle";
import CreateUser from "./CreateUser";
import {Updates} from './Update'
import { commentsList } from "./comments";
import { UpdateVehicle } from "./UpdateVehicle";
 
//const dataProvider = simpleRestProvider('http://localhost:3001')
// const {id} = useGetOne("http://localhost:3001", {id})
const Administrador = () => (
    
        <Admin basename="/admin" dataProvider={dataProvider}>
        
            <Resource name="user"  list={UserList} create={CreateUser} edit = {Updates} />
            {/* <Resource name="comments" list={ListGuesser} /> */}
            <Resource name="vehicles" list={vehiclesList} create={CreateVehicle} edit={UpdateVehicle} />
            <Resource name="comments" list={commentsList} />
            <Resource name="rent"  list={rentsList} />
            <Resource name="cities" recordRepresentation="name" />
        </Admin>
      
    );
export default Administrador;




//     ************** JSON PLACE HOLDER ********************


// import * as React from "react";
// import { Admin, Resource, ListGuesser,useDataProvider, useGetMany, fetchUtils  } from 'react-admin';
// import simpleRestProvider  from 'ra-data-simple-rest';
// import jsonServerProvider from "ra-data-json-server";
// import { UserList } from './users';
// import {vehiclesList} from './vehicles'
// import axios from "axios";
// // import { dataProvider } from './dataProvider';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// // const dataProvider = simpleRestProvider('http://localhost:3001')
// // const {id} = useGetOne("http://localhost:3001", {id})
// const Administrador = () => (
    
//         <Admin basename="/admin" dataProvider={dataProvider}>
        
//             <Resource name="users"  list={ListGuesser} />
//             {/* <Resource name="comments" list={ListGuesser} /> */}
//             {/* <Resource name="vehiculos"  list={vehiclesList} /> */}
//         </Admin>
      
//     );
// export default Administrador;