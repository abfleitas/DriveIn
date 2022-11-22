import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField, Pagination, Button,  TopToolbar,ExportButton, CreateButton,  } from 'react-admin';
import { PostFilterSidebar } from './PostFilterSidebar';

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;



const ListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
        </Button>
        

    </TopToolbar>
);

export const UserList = () => (
    
    <List aside={<PostFilterSidebar/>} actions={<ListActions/>} title="List of Users" pagination={<PostPagination/>} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="active" />
        </Datagrid>
    </List>
);