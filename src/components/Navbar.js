import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles ({
    header : {
        background : "#111111",
    },
    tab : {
        color : "white",
        textDecoration : "null",
        marginRight: 20,
        fontSize: 20,
    }
})
 const Navbar = () => {
     const classes = useStyle();
    return (
        <AppBar className = {classes.header} position = 'static'>
            <Toolbar >
                <NavLink className={classes.tab} to="./">
                    Assimilate Tech.
                </NavLink>
                <NavLink className={classes.tab} to="/all">
                    All Users
                </NavLink>
                <NavLink className={classes.tab} to="/add">
                    Create User
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;