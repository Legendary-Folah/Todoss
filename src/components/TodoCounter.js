import React from 'react';

function TodoCounter({count}) {
    return (
        <div className='todoCounter'>
            <h3>Your Todos - {count} Todo(s)</h3>
        </div>
    )
}


export default TodoCounter;