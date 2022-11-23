import * as React from "react";
import { List, Datagrid, TextField, NumberField, Pagination, TopToolbar, CreateButton } from 'react-admin';

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const ListActions = () => (
   <TopToolbar>
      <CreateButton />

   </TopToolbar>
);

export const commentsList = () => (
   <List title="List of vehicles" actions={<ListActions />} pagination={<PostPagination />}>
      <Datagrid rowClick="edit">
         <NumberField source="id" />
         <TextField source="description" />
      </Datagrid>
   </List>
);

