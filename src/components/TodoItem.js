import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem({ todo, theme, completed, onChange, style, deleteTodo}) {
    const lightTheme = {
        backgroundColor: "#cdcdcd",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        borderBottom: '1.5px solid black',
    };

    return (
        <div className="todoItem" style={theme ? null : lightTheme}>
            <div className='checkTodo'>
                <input type="checkbox" checked={completed} onChange={onChange} />
                <p style={style}>{todo.text}</p>
                {/* <FontAwesomeIcon icon={["fal", "delete"]} /> */}
            </div>
        </div>
    )

}

export default TodoItem;