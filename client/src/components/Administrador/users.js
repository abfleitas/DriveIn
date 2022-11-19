import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />

        </Datagrid>
    </List>
);