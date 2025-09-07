import React from "react";
import ReactDOM from "react-dom/client"

const names="saurabh";
const obj={
    age:23,
    salary:60
}
const obj2={
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
}
//React Element
const newElement=(
    <>
    <h1 id="first" className="second">Hello coder{"names"} army</h1>
    <h2 style  ={obj2}> coder army{obj.age}</h2>
    </>
)
Reactroot.render(newElement);
function greet(){
    return <h1>Aur bhai </h1>
};
function meet(){
    return <h2>Sab badhiya bhai</h2>
}
const newElement2=greet();
const newElement3=meet();

//  babel                   React                    Render;
//JSX=>React.createElement()=>react element(JSObj)=>HTML  element


// ReactDOM.render(getElementById('root'))
const Reactroot=ReactDOM.createRoot(document.getElementById('root'))
// Reactroot.render(element)
// Reactroot.render(element2)//jab bhi render hoga to previous sara children saaf ho jayeega sirf naya wala rahega
const newElement4=<>{newElement2} {newElement3}</>;
//jsx:javascipt XML :HTML code direct js ke ander likh sakte hai
