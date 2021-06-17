import React from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
    IconButton 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonBar from '../ButtonBar';

import useStyles from './styles';

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="secondary" 
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <div className={classes.grow} /> 

                    
                    <ButtonBar>Home</ButtonBar>
                    <ButtonBar>Collections</ButtonBar>
                    <ButtonBar>About us</ButtonBar>

                    <Avatar 
                        alt="avatar" 
                        src="https://avatars.githubusercontent.com/u/57817250?v=4"
                        className={classes.avatar}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;