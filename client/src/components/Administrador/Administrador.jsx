import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Administrador = () => (
    
        <Admin basename="/admin" dataProvider={dataProvider}>
        
            <Resource name="users"  list={UserList} />
            <Resource name="comments" list={ListGuesser} />
            
        </Admin>
      
    );
export default Administrador;