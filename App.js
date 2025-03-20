import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Here we are finally learning REACT 🚀"),
    React.createElement("h1", {}, "I'm a nested tag created using React!"),
    React.createElement("h2", {}, "I'm another element at the same Level!"),
  ]),
  React.createElement(
    "p",
    { id: "child3" },
    "Hi there! Today your are learning how to use npm in your react project. It includes several packages as well and one of them is parcel ✨"
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a Sibling to nested tag!"),
    React.createElement("h2", {}, "I'm another element at the same Level!"),
  ]),
]);
//heading is an object created by createElement
const root = ReactDOM.createRoot(document.getElementById("root"));
//connects with the div having root as id
root.render(heading);
//render just converts the object into tag for html
