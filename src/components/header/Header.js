import React from 'react'
import AppBar from './AppBar'
import classes from './header.module.css'
import MainHeader from './MainHeader'
const Header = () => {
    return (
        <header className={classes.header}>
            <AppBar />
            <MainHeader />
        </header>
    )
}

export default Header
