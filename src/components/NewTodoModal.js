import React, { useState } from "react"

function NewTodoModal({ show, onClick, custTodos}) {
    const [newTodo, setNewTodo] = useState("");
    const [newTodoList, setTodoList] = useState([]);

    function addTodo() {
        custTodos.push({
            id: custTodos.length + 1,
            text: newTodo,
            completed: false,
        });
        setNewTodo("");
    }

    if (show === false) {
        return null;
    }
    return (
        <div className="todoModal" onClick={onClick}>
            <div
              className="modalContent"
              onClick={(e) => {
                  e.stopPropagation();
              }}
              >
                  <div className="modalHeader">
                      <h4 className="modalTitle">Add New Todo..</h4>
                  </div>
                  <div className="modalBody">
                      <textarea
                        cols="30"
                        rows="9"
                        placeholder="Enter your to-do..."
                        name="newTodo"
                        value={newTodo}
                        onChange={(e) => {
                            setNewTodo(e.target.value);
                        }}
                        />
                  </div>
                  <div className="modalFooter">
                      <button className="button" onClick={newTodo ? addTodo : null}>
                          Add Todo(s)...
                      </button>
                  </div>
              </div>
        </div>
    );
}

export default NewTodoModal;