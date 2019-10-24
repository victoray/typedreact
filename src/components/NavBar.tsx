import React from "react";

const NavBar: React.FC = () => {
    return (
        <div className={"ui top attached menu"}>
            <div className="ui category search item">
                <div className="ui transparent icon input">
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
        </div>);
};

export default NavBar;
