import React from 'react';
import { AppBar, TextInput } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import logo from './images/workload-experts-header.png';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginLeft: -10
  },
  spacer: {
    flex: 1,
  },
  logo: {
    maxWidth: "250px",
    marginLeft: -35
  },
  search: {
    position: 'relative',
    borderRadius: 10,
    
    },
  
  searchIcon: {
  
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
  },
});

const CustomAppBar = props => {
  const classes = useStyles();
  return (
    <AppBar {...props} color='transparent' >
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} height="25rem"/>
      </Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
      ></Typography>
      
     
    </AppBar >
  );
};

export default CustomAppBar;