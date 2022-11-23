import * as React from "react";
import { List, Datagrid, ImageField, TextField, EmailField, NumberField, Pagination, Button,  TopToolbar,ExportButton, CreateButton,  } from 'react-admin';
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
            <NumberField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <NumberField source="whatsapp" />
            <TextField source="password" />
            <ImageField source="photo" />
            <NumberField source="role" />
            <TextField source="active" />
        </Datagrid>
    </List>
);