import * as React from "react";
import { Admin, Resource, ListGuesser,useDataProvider, useGetMany, fetchUtils  } from 'react-admin';
import simpleRestProvider  from 'ra-data-simple-rest';
import { UserList } from './users';
import {vehiclesList} from './vehicles'
import axios from "axios";


// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = simpleRestProvider('http://localhost:3001')
// const {id} = useGetOne("http://localhost:3001", {id})
const Administrador = () => (
    
        <Admin basename="/admin" dataProvider={dataProvider}>
        
            <Resource name="user"  list={UserList} />
            {/* <Resource name="comments" list={ListGuesser} /> */}
            <Resource name="vehicles"  list={vehiclesList} />
        </Admin>
      
    );
export default Administrador;