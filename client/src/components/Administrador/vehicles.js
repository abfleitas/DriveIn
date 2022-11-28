import * as React from "react";
import { List, Datagrid, TextField, ImageField, NumberField, BooleanField, Pagination, TopToolbar, CreateButton, ReferenceField } from 'react-admin';
import { FilterSidebarVehi } from "./FilterSidebarVehi";

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const ListActions = () => (
    <TopToolbar>
        <CreateButton />
    </TopToolbar>
);

export const vehiclesList = () => (
    <List aside={<FilterSidebarVehi />} actions={<ListActions />} title="List of vehicles" pagination={<PostPagination />}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="color" />
            <TextField source="transmition" />
            <BooleanField source="air" />
            <TextField source="seats"/>
            <TextField source="category" />
            <ImageField source="photo" />
            <BooleanField source="availability" />
            <NumberField source="initialPrice" />
            <ReferenceField source="cityId" reference="cities" />
        </Datagrid>
    </List>
);