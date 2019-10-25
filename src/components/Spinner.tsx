import React from "react";


/**
 * Displays a spinning loaders during data loading.
 */
const Spinner = () => {

    return (
        <div className="ui active dimmer">
            <div className="ui big text loader"> Loading....</div>
        </div>
    );
};

export default Spinner;
