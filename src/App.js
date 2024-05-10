import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import Header from "./components/js/Header";
import Body from "./components/js/Body";
import Footer from "./components/js/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/js/About";
import Contact from "./components/js/Contact";
import Error from "./components/js/Error";
import RestaurantMenu from "./components/js/RestaurantMenu";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />   
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
]);

const rootelement = ReactDOM.createRoot(document.getElementById("root"));
rootelement.render(<RouterProvider router={appRouter} />);

//const heading = React.createElement("h1", {id: "heading", "xyz": "abc"}, "Hello World from React");
/*
<div id="parent">
    <div id="child1">
        <h1>I'am h1 tag</h1>
        <h2>I'am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'am h1 tag</h1>
        <h2>I'am h2 tag</h2>
    </div>
</div>
*/

//older react create element syntax, its complax so dev life easy to introduce JSX
//React.createElement =>ReactElement-JS object => HTMLElement(render)
//const heading = React.createElement("h1", {id:'heading'}, "Learning React");

//JSX is a HTML like syntax or xml like syntax , its not HTML inside js
//JSX (transpiled before it reaches the JS Engine) - Parcel - Babel do the transpailed job (parcel already have the babel inside it)
//JSX => React.createElement =>ReactElement-JS object => HTMLElement(render)

//React Element
const jsxHeading = (
<h1 id="heading">Learning React using JSX react</h1>
);

const element = <span>React Element</span>

//React Component
const Title = () => (
    <div id="container">
        {element}
        <h1 className="heading">Call one component inside another component</h1>
    </div>
);


//React Component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Learning React Functional Component</h1>
    </div>
);
 
//const root = ReactDOM.createRoot(document.getElementById('root'));
//element rendering
//root.render(jsxHeading);
//Functional component redering in React
//root.render(<HeadingComponent />);

// const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [
//     React.createElement("div", {}, "I'am h1 tag"),
//     React.createElement("div", {}, "I'am h2 tag")]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("div", {}, "React"),
//         React.createElement("div", {}, "Welcome")]),
//     ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);