import React, {useState} from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";


const HomeScreen = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={"container"}>
            <SideBar visible={visible}/>
            <NavBar setVisible={setVisible} visible={visible}/>
            <div className="pusher">
            </div>
        </div>
    );
};

export default HomeScreen;
