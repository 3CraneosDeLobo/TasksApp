import React, {useState} from 'react';
import {v4 as generarId} from 'uuid';


function AddTask(props) {

const [texto, setTexto] = useState('');



const viewText = (e) =>
{
    setTexto(e.target.value);
    props.setDato({id: props.dato.id, texto: e.target.value});
    //console.log(e.target.value);
}

const addTask = e => {
    e.preventDefault();

    const tarea = {
        text: texto,
        id: generarId(),
        completado: false
    }
    
 
    props.addTarea(tarea);



//console.log(tarea);
}


    return (
        <>
            <form className='row g-2' onSubmit={ addTask}>
                <input className='form-control' name='task' value={props.dato.texto}  onChange={viewText}/>
                <button className={`btn ${props.add ? 'btn-success' : 'btn-primary'}`}>{props.add ? 'GUARDAR TAREA' : 'AGREGAR TAREA'}</button>
            </form>
        </>
    );



}


export default AddTask;