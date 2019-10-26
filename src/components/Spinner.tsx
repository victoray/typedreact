import React from "react";


/**
 * Displays a spinning loader during data loading.
 */
const Spinner = ({message = "Loading...."}) => {

    return (
        <div className="ui active dimmer">
            <div className="ui big text loader"> {message}</div>
        </div>
    );
};

export default Spinner;
