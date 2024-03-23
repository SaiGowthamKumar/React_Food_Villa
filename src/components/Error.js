import {useRouteError } from "react-router-dom"
const Error = () => {
    error=useRouteError();
    return (
        <>
            <h1>OOPS!!!</h1>
            <h2>Something went wrong </h2>
            <h3>{error.status+":"+error.statusText}</h3>

        </>
    );
}
export default Error;