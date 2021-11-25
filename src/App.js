import React, { useState} from "react";
import Header from "./components/Header";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import Todos from "./Todos";
import NewTodoModal from "./components/NewTodoModal";
import { Fab } from "react-tiny-fab";

let custTodos = [];

function App() {
    
    const lightTheme = {
        backgroundColor: "#cdcdcd",
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
    };

    const completedStyle = {
        fontStyle: "Italic",
        textDecoration: "line-through",
        color: "rgb(100, 105, 110)",
    };

    const [showModal, setShowModal] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const todos = custTodos.length > 0 ? custTodos : Todos;
    const newTodos = todos.map((todo) => (
        <TodoItem
           key={todo.id}
           style={todo.completed ? completedStyle : null}
           todo={todo}
           theme={isDark}
           completed={todo.completed}
           onChange={() => {
               setCompleted(!completed);
               todo.completed = completed;
           }}
          
           />
    ));

           function toggleAbout() {
               setShowAbout(!showAbout);
           }


           return (
               <div className="App" style={isDark ? null : lightTheme}>
                   <Header
                        isDark={isDark}
                        toggle={() => {
                            setIsDark(!isDark);
                        }}
                        toggleAbout={toggleAbout}
                        />
                        {/* <About showAbout={showAbout} toggleAbout={toggleAbout}/> */}
                        <TodoCounter count={custTodos.length} />
                        <Fab 
                            icon={"+"}
                            mainButtonStyles={{ backgroundColor: "rgb(35, 45, 50)" }}
                            event="click"
                            text="Add New Todo..."
                            onClick={() => {
                                setShowModal(true);
                            }} 
                        />
                        <NewTodoModal
                         custTodos={custTodos}
                         show={showModal}
                         onClick={() => {
                             setShowModal(false);
                         }}
                        />
                        {newTodos}
               </div>
           );
}

export default App;