import React from "react";

interface NavBarProps {
    setVisible: any;
    visible: boolean;
}


const NavBar = ({setVisible, visible}: NavBarProps) => {

    return (
        <div className={"ui top fixed menu borderless"}>
            <a className="item" onClick={() => setVisible(!visible)}>
                <i className="sidebar icon"/>
                Menu
            </a>
            <div className="ui right floated category search item">
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
                        <div className="item">Logout <i className="sign-out icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
