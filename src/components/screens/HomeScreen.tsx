import React, {useState} from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import Table from "../Table";


/**
 *
 * HomeScreen Component: This is the main screen of the app, hosting the SideBar and NavBar as child components.
 */
const HomeScreen = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={"container"}>
            <SideBar visible={visible}/>
            <NavBar setVisible={setVisible} visible={visible}/>
            <div className="pusher">
                <div className={"ui container"} style={{marginTop: "100px"}}>
                    <Table/>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
