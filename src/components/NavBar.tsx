import React from "react";

interface NavBarProps {
    setVisible?: any;
    visible: boolean;
}

/**
 *
 * NavBar Component: Displays all menu items in  a horizontal navbar with a right alinged dropdown menu and a search bar
 */
const NavBar = ({setVisible, visible}: NavBarProps) => {

    return (
        <div className="ui top fixed menu borderless">
            <div className="link item">
                <img className="ui mini image" alt={""} src={"https://semantic-ui.com/images/logo.png"}/>
            </div>
            <a className="item" onClick={() => setVisible(!visible)}>
                <i className="sidebar icon"/>
                Menu
            </a>
            <div className="ui  category search item">
                <div className="ui large icon input">
                    <input className="prompt" type="text" placeholder="Search..."/>
                    <i className="search link icon"/>
                </div>
            </div>

            <div className="right menu">
                <div className="ui simple dropdown  item">
                    <img className="ui avatar image" src={"https://semantic-ui.com/images/avatar/small/matt.jpg"}
                         alt={""}/>
                    <span>Username</span> <i className="dropdown icon"/>
                    <div className="menu">
                        <div className="item link">Logout <i className="sign-out icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
