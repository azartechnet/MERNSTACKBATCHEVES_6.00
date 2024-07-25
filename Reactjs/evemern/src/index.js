import React from "react";
import ReactDOM from "react-dom/client";

/*const App=()=>{

    return(
        <div>
         <h1>React</h1>
        </div>
        )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//Basic Rendering
/*const App=()=>{
    return(
        <div>
            <h1>React</h1>
            <form>
                <input type="text" placeholder="Enter your name" />
                <button>Submit</button>
            </form>
        </div>
        )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>)*/

//Dynamic Rendering

/*const App=()=>{
    const username="mohamed";
    return(
        <div>
            <h1>Hello,{username}</h1>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>)*/

//With JSX

/*const myelm=<h1>Welcome</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm);

As you can see in the first example, JSX allows us to write HTML
 directly within the JavaScript code.
JSX is an extension of the JavaScript language based on ES6, */

//Without JSX

/*const myelm1=React.createElement('h1',{},"WithoutJSX")

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm1);*/

//Expression in JSX

/*const myelem=<h1>React is {5+5} time is better</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelem);*/

//React List

/*const Myelem=()=>(
    <ul>
        <li>React</li>
        <li>JSX</li>
        <li>JS</li>

    </ul>
)

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Myelem/>);*/

//Fragement Tag
const App=()=>{
    return(
       
        <>
         <h1>Welcome-1</h1>
        <h1>Welcome-2</h1>
        </>  
    )        
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);




