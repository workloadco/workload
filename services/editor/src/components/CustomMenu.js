import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { MenuItemLink, getResources, Menu } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const useStyles = makeStyles({
  menu: {
    
    padding: '15px 22px',
    },
  firstmenu: {
    
    paddingTop: '60px',
    paddingLeft: '22px',
    paddingBottom: '15px'
    },
  menuContainer: { 
    
    paddingTop: '40px',
    paddingBottom: '15px'
        }
});

const CustomMenu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    const classes = useStyles();
    return (
        <div className={classes.menuContainer}>
            
            <MenuItemLink className={classes.menu}
                to="/"
                primaryText="Dashboard"
                leftIcon={<DashboardRoundedIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
              <MenuItemLink className={classes.menu}
                to="/flows"
                primaryText="Workflows"
                leftIcon={<AccountTreeRoundedIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
               <MenuItemLink className={classes.menu}
                to="/users"
                primaryText="Connections"
                leftIcon={<HttpsRoundedIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink className={classes.menu}
                to="/flows"
                primaryText="Settings"
                leftIcon={<SettingsRoundedIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
            
        </div>
    );
};

export default CustomMenu;