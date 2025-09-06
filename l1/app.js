const element=React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder Army");
const element2=React.createElement("h2",{id:"first",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"MAza aya");
const div1=React.createElement('div',{},[element,element2]);
// ReactDOM.render(getElementById('root'))
const Reactroot=ReactDOM.createRoot(document.getElementById('root'))
// Reactroot.render(element)
// Reactroot.render(element2)//jab bhi render hoga to previous sara children saaf ho jayeega sirf naya wala rahega
Reactroot.render(div1);