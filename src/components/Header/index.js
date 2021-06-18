import React from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
    IconButton 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import ButtonBar from '../ButtonBar';
import DrawerMenu from '../DrawerMenu';
import { show } from '../../store/Drawer/Drawer.actions';

import useStyles from './styles';

function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('@user'))

    return (
        <div className={classes.root}>
            <DrawerMenu />
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="secondary" 
                        aria-label="menu"
                        onClick={() => {
                            dispatch(show())
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <div className={classes.grow} /> 

                    
                    <Link to="/">
                        <ButtonBar>Home</ButtonBar>
                    </Link>
                    <Link to="/profile">
                        <ButtonBar>Profile</ButtonBar>
                    </Link>

                    <Link to="/details">
                        <ButtonBar>Collections</ButtonBar>
                    </Link>

                    <ButtonBar>About us</ButtonBar>

                    <Avatar 
                        alt="avatar" 
                        src={user.data[0].avatar}
                        className={classes.avatar}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;