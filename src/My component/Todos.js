// import React from 'react'
// import  TodoItem from "./TodoItem";


// const Todos = (props) => {
//   return (
//     <div className="container">
//         <h3>Todos List</h3>
//         <TodoItem todo={props.todo[0]}/>
     
//     </div>
//   )
// }

// export default Todos
import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    };
  // Check if todos is an array and has elements
//   if (!props.todos || !Array.isArray(props.todos) || props.todos.length === 0) {
//     return <div className="container my-3 py-3"><p>No Todos to display</p></div>;
//   }

return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {props.todos.length===0? "No Todos to display":  
        props.todos.map((todo)=>{
            console.log(todo.sno);
            return (<> <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/> </>
            )
        })
          } 
    </div>
);
}

export default Todos;

