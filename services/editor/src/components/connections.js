import React from "react";
import {Helmet} from "react-helmet";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomEmailField from './CustomEmailField';

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};

export const FlowList = props => (
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