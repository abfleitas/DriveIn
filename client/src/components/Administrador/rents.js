import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField, Pagination, Button, FilterButton, TopToolbar,ExportButton, CreateButton  } from 'react-admin';
import { PostFilterSidebar } from './PostFilterSidebar';

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>

    </TopToolbar>
);


export const rentsList = () => (
    <List actions={<ListActions/>} title="List of Rents" pagination={<PostPagination /> }>
        <Datagrid rowClick="edit">
             <NumberField source="id" />
             <TextField source="dateInit" />
             <TextField source="dateFinish" />
             <NumberField source="totalPrice" />
             <TextField source="createdAt" />
             <NumberField source="userId" />
             <TextField source="userName" />
             <TextField source="userEmail" />
             <NumberField source="vehicleId" />
             <TextField source="vehicle" />
        </Datagrid>
    </List>
);