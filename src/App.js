// import logo from './logo.svg';
// import './App.css';
// import  Header  from"./My component/Header";
// import  Footer  from"./My component/Footer";
// import  Todos from"./My component/Todos";

// function App() {
//   let todos=[
//     {
//       sno:1,
//       title:"Go to the market",
//       desc:"You need to go to the market to get this job done"
//     },
//     {
//       sno:2,
//       title:"Dentist appointment",
//       desc:"Visit the dentist at 2pm"
//     },
//     {
//       sno:3,
//       title:"Pickup parcel",
//       desc:"Pickup parcel from the post"
//     },
//   ]

//   return(<>
//     <Header title="My Todos List"/>
//     <Todos todos={todos}/ >
//     <Footer/>
//     </>
//     );
    
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Header from "./My component/Header";
import Footer from "./My component/Footer";
import Todos from "./My component/Todos";
import AddTodo from "./My component/AddTodo";
import React,{ useState,useEffect} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo)=>{
    console.log("I  am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }




  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else
    {sno = todos[todos.length-1].sno +1;}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
    
  }

  const [todos, setTodos]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <>
    
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      
    </>
  );
}

export default App;

