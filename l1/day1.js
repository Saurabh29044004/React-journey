// styles={fontSize:"30px",backgroundColor:"blue",color:"white"}
// 👉 Ye ek example object hai jo styling ke liye use hoga (CSS jaisa hi hai, but JS object format me likha hai)

const React={
  createElement:function(tag,styles,children){   // 👉 React object me ek function createElement banaya jo ek DOM element banata hai
    const element=document.createElement(tag);   // 👉 jo bhi tag milega (h1, h2, ul etc.) uska element banayega
    
    if(typeof children === 'object'){            // 👉 agar children ek array hai (jaise ul ke andar li list)
      for (let val of children)                  // 👉 to har child ko loop karke append kar dena element ke andar
        element.append(val);
    }
    else
     element.innerText=children;                 // 👉 agar children sirf ek string hai (jaise "Hello"), to usko innerText me daal do
    
     for(let key in styles){                     // 👉 styles object ke har key ko iterate karenge
      element.style[key]=styles[key];            // 👉 aur element ke style me apply karenge
     }
     return element;                             // 👉 bana hua element return kar denge
  }
}

const ReactDOM={
  render:function(element,root){                 // 👉 ReactDOM ka ek render function banaya
    root.append(element);                        // 👉 render ka kaam hai element ko root (document.getElementById wala) me append karna
  }
}


const header1=React.createElement(               // 👉 ek h1 banaya
  'h1',                                          // 👉 tag: h1
  {fontSize:"30px",backgroundColor:"blue",color:"white"}, // 👉 styles
  "Hello coder Army"                             // 👉 children text
);

const header2=React.createElement(               // 👉 ek h2 banaya
  'h2', 
  {fontSize:"25",backgroundColor:"black",color:"white"}, 
  "kaise hai aap log"
);

const li1=React.createElement('li',{},"HTML");   // 👉 li banaya jisme text hai HTML
const li2=React.createElement('li',{},"CSS");    // 👉 li banaya jisme text hai CSS
const li3=React.createElement('li',{},"JS");     // 👉 li banaya jisme text hai JS

const Ul=React.createElement(                    // 👉 ek ul banaya jisme children array hai (li1, li2, li3)
  'ul',
  {fontSize:"30px",backgroundColor:"blue",color:"white"},
  [li1,li2,li3]
) 

ReactDOM.render(header1,document.getElementById('root')); // 👉 h1 ko root ke andar render kiya
ReactDOM.render(header2,document.getElementById('root')); // 👉 h2 ko root ke andar render kiya
ReactDOM.render(Ul,document.getElementById('root'));      // 👉 ul list ko root ke andar render kiya


// const header1=document.createElement('h1');    // 👉 ek normal h1 element banaya
// header1.innerText="hello";                     // 👉 usme text daala "hello"
// header1.style.backgroundColor="pink";          // 👉 uska background pink kar diya
// header1.style.fontSize="20px";                 // 👉 uska font size 20px
// header1.style.color="white";                   // 👉 uska color white

// const header2=document.createElement('h2');    // 👉 ek h2 banaya
// header2.innerText="hello kaise hai aaap log";  // 👉 usme text daala
// header2.style.backgroundColor="black";         // 👉 background black
// header2.style.fontSize="25px";                 // 👉 font size 25px
// header2.style.color="white";                   // 👉 color white

// const root=document.getElementById('root');    // 👉 root element (div#root) nikala
// root.append(header1);                          // 👉 h1 ko root ke andar daala
// root.append(header2);                          // 👉 h2 ko bhi root ke andar daala
