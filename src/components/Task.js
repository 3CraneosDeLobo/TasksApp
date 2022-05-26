import React from 'react';
import { AiFillDelete as Delete, AiFillEdit as Edit } from 'react-icons/ai'

function Task(props) {




    return (
        <>
            <div className={`row justify-content-center align-items-center card-body border rounded m-1 ${props.completed ? 'bg-info tachado' : 'bg-light'}`}>
                <div className='col-9 btn' onClick={() => props.complete(props.id)}>
                    {props.children}
                </div>
                <div className='col-1 btn ms-2' onClick={() => props.edit(props.id)}><Edit className='icono edit' /></div>
                <div className='col-1 btn ms-2' onClick={() => props.delete(props.id)}><Delete className='icono delete' /></div>
            </div>

        </>
    );
}

export default Task;