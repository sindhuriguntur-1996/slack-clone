import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help"
import { useStatevalue } from './StateProvider';

function Header() {
    const[{user}]=useStatevalue();
    return (
        <div className="header">
            <div className="header__left">
                {/*Avatar */}
                <Avatar className="header_avatar"
                alt={user?.displayName}
                src={user?.photoURL} />
                {/*icon*/}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/*search icon*/}
                <SearchIcon />
                {/*input*/}
                <input placeholder="search programmer" type="text" />
            </div>
            <div className="header__right">
                {/*help icon*/}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
