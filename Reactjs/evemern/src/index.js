import React, { Component } from "react";
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
/*const App=()=>{
    return(
       
        <>
         <h1>Welcome-1</h1>
        <h1>Welcome-2</h1>
        </>  
    )        
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);*/

//Importing file and Bootstrap

/*import './index.css';

const App=()=>{
    return(
        <>
          <h1>Welcome</h1>
          <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with
                anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
        </>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Conditional Rendering

/*const x=11
let text="hello";
if(x>10){
    text="world"
    }else{
        text="hello"
        }
        console.log(text)
        //Output: hello
    
const Myelem=()=>{
   
    return(
        <div>
            {text}Welcome!!
        </div>
    )

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//class component

/*class Sample extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//else if ladder

/*const Gradesystem=()=>{

    let grade;
    const studentmark=prompt("Enter the your marks??")

    if(studentmark>=90)
    {
        grade='A';
    }
    else if(studentmark>=70)
    {
        grade='B';
    }
    else if(studentmark>=60)
    {
        grade='C';
    }
    else
    {
        grade='F';
    }
    return(
        <div>
            <h1>Your Grade is::{grade}</h1>
        </div>
    )

}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Gradesystem/>)*/

//Switch Statement

/*const getGrade=(score)=>{

    switch(true)
    {
        case score>=90:
            return 'A';
        case score>=80:
            return 'B';
        case score>=70:
            return 'C';
        default:
            return 'F';
    }
}

const GradeComponent=()=>{

    const score=90;
    const grade=getGrade(score);

    return(
        <div>
            <h1>Your Grade is::{grade}</h1>
            </div>
    )
    
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<GradeComponent/>)*/

//Function arguments with props

/*function Sample(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="John" age="25"/>)*/

//Component in Component

/*function Sample()
{
    return(
        <h1>This is First Component</h1>
    )
}
function Sample1()
{
    return(
        <div>
            This is Second Component
            <Sample/>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)*/

/*import Sample from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))

r1.render(<Sample/>)*/

//Component Constructor

/*class Sample extends React.Component
{
    constructor()
    {
       super();
        this.state={name:"John",age:25};
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.age}</h2>
            </div>
            );
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={
            emp:{
                name:"John",
                age:25,
                city:"karur"
            },
            showData:false
        };
    }
    showData()
    {
        this.setState({showData:true});
    }
    hideData()
    {
        this.setState({showData:false});
    }
    render()
    {
        let data;
        if(this.state.showData==true)
        {
            data=<div><b>City:</b>{this.state.emp.city}<b>name::</b>{this.state.emp.name}<br/>
               <button onClick={this.hideData.bind(this)}>HideData</button>
            </div>
            
        }
        else
        {
             data=<div><button onClick={this.showData.bind(this)}>ShowData</button></div>
        }
        return(
            <div>
                <h1>Welcome</h1>
                <h2>EmployeeDetails</h2>
                {data}
            </div>
        )
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Using Constructor

/*class Header extends Component
{
    text="welcome"
    constructor()
    {
        super();
        this.state={f1:'red'}
    }
    render()
    {
        return(
            <div style={{color:this.state.f1}}>
                <h1>{this.text}</h1>
            </div>
        )
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//React Event

/*function Football()
{
    const shoot=()=>{
        alert("Goal Shooted")
    }
    return(
        <div>
            <button onClick={shoot}>Shoot</button>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)*/

/*function Football()
{
    const shoot=(a)=>{
        alert("Goal Shooted",a)
    }
    return(

        <div>
            <button onClick={()=>shoot("Goal")}>Shoot</button>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)*/

//conditional rendering

/*function MissedGoal()
{
    return<h1>Missed</h1>
}
function MadeGoal()
{
    return<h1>GOAL</h1>
}

function Goal(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
        return<MadeGoal/>
    }
    else
    {
        return<MissedGoal/>
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.5}/>)*/

//React List

/*function Car(props)
{
    return<li>I am {props.b1}</li>
}
function Garage()
{
    const cars=["Ford","BMW","Audi"]
    return(
        <ul>
            {cars.map((c1)=>{
                return <Car b1={c1}/>
            })
            }
        </ul>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React Keys
/*function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);*/

  //React getDerivedStateFromProps

  /*class Header extends React.Component
  {
    
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    static getDerivedStateFromProps(props,state)
    {
       return {count:props.c1}

    }
    render()
    {
        return <h1>Count: {this.state.count}</h1>;
        }

  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header c1="100"/>);*/

  //ComponentDidMount

  /*class Header extends React.Component
  {
     constructor(props)
     {
        super(props);
        this.state={favcolor:"red"};
     }
     componentDidMount()
     {
        console.log("Component mounted");
        setTimeout(()=>{
            this.setState({favcolor:"blue"})
        },10000)
     }
     render()
     {
        return(
            <h1>This is Render Page{this.state.favcolor}</h1>
        )
     }
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Header/>)*/

  // setTimeout executes the code only once after the specified delay, 
//  setInterval executes the code repeatedly at the specified interval.
//ComponentWillUnmount clears the timer when the component is about to be
// removed from the DOM to prevent memory leaks

  //Updating-getDerivedStateFromProps

  /*class Header extends Component
  {
     constructor(props)
     {
        super(props);
        this.state={favcolor:"red"}
     }
     static getDerivedStateFromProps(props,state)
     {
        console.log("getDerivedStateFromProps");
        return {favcolor:state.favcolor};
     }

     changeColor=()=>{

        this.setState({favcolor:"yellow"})
     }
     render()
     {
        return(
            <div>

                <h1>This is Render Page{this.state.favcolor}</h1>
                <button type="button" onClick={this.changeColor}>Change</button>

            </div>
        )
     }
  }

//    ReactDOM.render(<Header favcolor="green"/>,document.getElementById('root'));

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Header favcolor="green"/>)*/

 //Should ComponentUpdate

 /*class Header extends React.Component
 {
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"}
    }
    shouldComponentUpdate()
    {
        return true;
    }
    changeColor=()=>{
        this.setState({favcolor:"yellow"})
    }
    render()
    {
        return(
            <div>
  <h1>This is render page{this.state.favcolor}</h1>
             <button type="button" onClick={this.changeColor}>Change</button>
            </div>
        )

    }
 }

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Header/>)*/

 //React Hooks using useState

 import { useState,useEffect } from "react";

 /*function Counter()
 {
    const [count, setCount] = useState(0);
    

    return(
        <div>
            <h1>Count:{count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
 }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Counter/>)*/

  /*function Counter()
  {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Rahul");
    const [password,setPassword]=useState("123")

    return(
        <div>
            <h1>Count:{count}</h1>
            <h1>Name:{name}</h1>
            <h1>Password:{password}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
            <button type="button" onClick={()=>setName("Rahul Kumar")}>Change Name</button>
            <button type="button" onClick={()=>setPassword("1234")}>Change Password</button>
            </div>
        
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Counter/>)*/

  //UseEffect

  /*function Timer()
  {
    const [count,setCount]=useState(0);
    useEffect(()=>
    {
        const intervalId=setInterval(()=>
        {
            setCount(count+1);
            },1000);
            return ()=>
            {
                clearInterval(intervalId);
            }
            },[count]);
            return(
                <div>
                    <h1>Count:{count}</h1>
                    <button type="button" onClick={()=>setCount(0)}>Reset</button>
                    </div>
                );
                }
                const r1=ReactDOM.createRoot(document.getElementById('root'))
                r1.render(<Timer/>);*/

//React without useContext

/*function Component1()
{
    const [user,setUser]=useState("mohamed");
    return(
        <div>
            <h1>User:{user}</h1>
            <Component2 user={user}/>
        </div>
    )
}
function Component2({user})
{
    return(
        <div>
            <h1>User:{user}</h1>
            <p>{user}Profile</p>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>);*/

//React useContext

import { createContext,useContext } from "react";
const UserContext=createContext()

function Component1()
{
    const [user,setUser]=useState("mohamed");
    return(
        <UserContext.Provider value={user}>
            <div>
                <h1>User:{user}</h1>
                <Component2/>
            </div>
        </UserContext.Provider>
        )
}
function Component2()
{
    const user=useContext(UserContext)
    return(
        <div>
            <h1>User:{user}</h1>
            <p>{user}Profile</p>
        </div>
        )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>);



  
  