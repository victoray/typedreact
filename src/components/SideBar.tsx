import {Link} from "react-router-dom";
import React from "react";

interface SideBarProps {
    visible: boolean;
}

/**
 * SideBar Component: Displays all menu items in  a left fixed sidebar.
 */
const SideBar = ({visible}: SideBarProps) => {
    return (
        <div className={`ui ${(visible) ? "visible" : ""} sidebar left fixed vertical menu`}>
            <div className="item">
                <img className="ui mini image" alt={""} src={"https://semantic-ui.com/images/logo.png"}/>
            </div>
            <Link className="item" to={"/dashboard"}>DashBoard <i className="chart line icon"/></Link>
            <Link className="item" to={"/starwars"}>StarWars <i className="star icon"/></Link>
            <Link className="item" to={"/avengers"}>Avengers <i className="nintendo switch icon"/></Link>
            <Link className="item" to={"/settings"}>Settings <i className="cogs icon"/></Link>
        </div>);
};

export default SideBar;
