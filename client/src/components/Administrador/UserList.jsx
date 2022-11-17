import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="brand" />
      <TextField source="model" />
      <DateField source="year" />
      <TextField source="color" />
      <BooleanField source="category" />
    </Datagrid>
  </List>
);
