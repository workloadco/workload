import React from 'react';
import { fetchUtils, Admin, Resource, ListGuesser, EditGuesser, AuthProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//connect the data provider to the REST endpoint
//import { Button } from 'evergreen-ui';
import {FlowList} from "./components/connections";
import {UserList} from "./components/settings";
import Dashboard from "./components/Dashboard";
import {PostList, PostEdit, PostCreate } from "./components/workflows";
import authProvider from "./providers/authProvider";
import simpleRestProvider from 'ra-data-simple-rest';
import CustomLayout from './layouts/CustomLayout';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider("http://localhost:5000",httpClient);

function App() {
   return (
       <Admin dashboard={Dashboard} dataProvider={dataProvider} layout={CustomLayout} authProvider={authProvider} >
        <Resource name="dashboard" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} edit={PostEdit} create={PostCreate} />
        <Resource name="flows" list={ListGuesser} />
       

       </Admin>
   );
}

export default App;