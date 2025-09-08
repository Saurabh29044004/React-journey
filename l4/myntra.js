import React from "react";
import ReactDOM from "react-dom/client"
//Header
//Body
//footer
function Card(props){
return(
    <div style={{border:"2px solid black",padding:"2px",diplay:"flex"}}>
    <img src="https://www.montecarlo.in/cdn/shop/files/22503626W-9-38_1.jpg?v=1754380205&width=700" height="170px" width="150px"/>
    <div style={{textAlign:"center"}}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop now</h2>
    </div>
    </div>
)
}
const arr=[{cloth:"pant",offer:"10-20% off"},{cloth:"shirt",offer:"10-20% off"},{cloth:"tie",offer:"10-20% off"},{cloth:"saree",offer:"10-20% off"},{cloth:"tie",offer:"10-20% off"}]


function App(){
    return(
        //Header
        //Body
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
        {/* <Card cloth="T-shirt" offer="20-80%off"/>
        <Card cloth="Pant" offer="22-85%off"/>
        <Card cloth="Kurta" offer="20-50%off"/>
        <Card cloth="top" offer="10-50%off"/>
        <Card cloth="shirt" offer="2-8%off"/>
        <Card cloth="lower" offer="40-80%off"/>
        <Card cloth="joggers" offer="4-80%off"/>
        <Card cloth="tie" offer="4-8%off"/>
         */}
         {
        arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
         }

        </div>

    )
}
 


 const Root=ReactDOM.createRoot(document.getElementById('root'));
 Root.render(<App />);
