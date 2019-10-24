import React from "react";
import {Link} from "react-router-dom";

const SideBar: React.FC = () => {
    return (
        <div className="ui left fixed vertical menu">
            <div className="item">
                <img className="ui mini image" alt={""} src={"https://semantic-ui.com/images/logo.png"}/>
            </div>
            <Link className="item" to={"/"}>DashBoard <i className="chart line icon"/></Link>
            <Link className="item" to={"/"}>StarWars <i className="star icon"/></Link>
            <Link className="item" to={"/"}>Avengers <i className="nintendo switch icon"/></Link>
            <Link className="item" to={"/"}>Settings <i className="cogs icon"/></Link>
        </div>);
};

export default SideBar;
