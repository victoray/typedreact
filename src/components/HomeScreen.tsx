import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const HomeScreen: React.FC = () => {
    return (
        <div className={"ui grid"}>
            <div className="two wide column">
                <SideBar/>
            </div>
            <div className="fourteen wide column">
                <NavBar/>
            </div>
        </div>
    );
};

export default HomeScreen;
