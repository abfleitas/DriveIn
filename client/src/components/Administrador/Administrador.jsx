import * as React from "react";
import { Admin, Resource} from 'react-admin';
import { UserList } from './users';
import {vehiclesList} from './vehicles';
import {rentsList} from './rents'
import { dataProvider } from './dataProvider';
import CreateVehicle from "./CreateVehicle";
import CreateUser from "./CreateUser";
import {Updates} from './Update'
import { commentsList } from "./comments";
import { UpdateVehicle } from "./UpdateVehicle";
import MyLayout from './LayOut';

const Administrador = () => (
    
        <Admin basename="/admin" layout={MyLayout} dataProvider={dataProvider}>
            <Resource name="user"  list={UserList} create={CreateUser} edit = {Updates} />
            <Resource name="vehicles" list={vehiclesList} create={CreateVehicle} edit={UpdateVehicle} recordRepresentation="Brand" />
            <Resource name="comments" list={commentsList} />
            <Resource name="rent"  list={rentsList}   />
            <Resource name="cities" recordRepresentation="name" />
        </Admin>
      
    );
export default Administrador;

