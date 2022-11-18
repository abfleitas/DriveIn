import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const vehiclesList = () => (
    <List>
        <Datagrid rowClick="edit">
             <NumberField source="id" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="color" />
            <TextField source="transmition" />
            <TextField source="air" />
            <TextField source="seats" />
            <TextField source="seats" />
            <TextField source="category" />
            <TextField source="photo" />
            <TextField source="availability" />
            <TextField source="initialPrice" />
            <TextField source="cityId" />

        </Datagrid>
    </List>
);

