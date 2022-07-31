import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {BallTriangle	} from "react-loader-spinner"
import React from "react";

const Loader=()=> {
    return (
        <div className="loading">
            <BallTriangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
            <h4>Loading</h4>
        </div>
    )
}
export default Loader