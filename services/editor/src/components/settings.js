import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomEmailField from './CustomEmailField';


export const UserList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <TextField source="id" />
           <TextField source="name" />
           <TextField source="username" />
           <CustomEmailField source="email" label="Email" />
           <TextField source="address.street" label="Address"/>
           <TextField source="phone" sortable="false"/>
           <TextField source="website" />
           <TextField source="company.name" label="Company Name"/>
       </Datagrid>
   </List>
);