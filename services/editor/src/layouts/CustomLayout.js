import * as React from 'react';
import { Layout } from 'react-admin';
import CustomAppBar from '../components/CustomAppBar';
import CustomMenu from '../components/CustomMenu';

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} menu={CustomMenu}/>;

export default CustomLayout;