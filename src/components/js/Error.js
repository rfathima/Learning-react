import React, { useEffect } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>Oops! Something Went Wrong!</div>
    );
};

export default Error;