import * as React from "react";
import { List, Datagrid, TextField, ImageField, NumberField, Pagination, Button, FilterButton, TopToolbar,ExportButton, CreateButton  } from 'react-admin';

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

export const vehiclesList = () => (
    <List   actions={<ListActions/>} title="List of vehicles" pagination={<PostPagination /> }>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="color" />
            <TextField source="transmition" />
            <TextField source="air" />
            <TextField source="category" />
            <ImageField source="photo" />
            <TextField source="availability" />
            <NumberField source="initialPrice" />
            <NumberField source="cityId" />
            {/* <TextField source="seats"/> */}

        </Datagrid>
    </List>
);

