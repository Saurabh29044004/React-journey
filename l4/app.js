import React from "react";
import ReactDOM from "react-dom/client"
const element1=<h1>Hello Coder Army</h1>
//JSX:JS expression result lake de 
//JSX:JS statement nhi likh sakte
//arry nhi daal sakte hai

// let obj={
//     name:"saurabh",
//     age:21,
// }
//  props={
//     name:"saurabh gupta",
//     age:"21"
// } 
// const element3=<h1 id="first" className="second"></h1>;

function Greet(props){
    return <h2>Ram Ram bhai sarya ne{props.name} {props.age}</h2>
};
const element4=<Greet name="saurabh gupta" age="21"/>
// function greet(name){
//     return <h2>Ram Ram bhai sarya ne{obj.name}</h2>
// }
const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element1);
// Root.render(greet("saurabh"));
//new way for elements 
//agr aise reprent Karenge to functin ka phela letter hamesha capital hoga
const element2=<Greet/>
Root.render(element2);
