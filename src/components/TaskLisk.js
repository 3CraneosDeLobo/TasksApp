import React, { useState } from 'react';
import '../styles/Styles.css';
import AddTask from './AddTask';
import Task from './Task';
import { useLocalStorage } from './useLocalStorage';



function TaskList() {

 // const [task, setTask] = useState([]);
 //LocalStorage Hook Modificado-----------------

const [task, setTask] = useLocalStorage([]);
 //---------------------------------------------
  const [dato, setDato] = useState({id: '', texto: ''});
  const [edit, setEdit] = useState(false);

  const addTask = (tarea) => {
    console.log(edit)
  if(!edit){
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();
      const tareas = [tarea, ...task];
      setTask(tareas);
      console.log("TAREA AGREGADA CORRECTAMENTE!");

    }
  } else{

    if (!tarea.text.trim()) {
      deleteTask(dato.id);
      setEdit(false);

    }else{
      const tareas = task.map(x => {
        if (x.id === dato.id) {
          x.text = tarea.text;
        }
        return x;
      });
      setTask(tareas);
      console.log("TAREA EDITADA CORRECTAMENTE");
      setEdit(false);
    }

  
  }



  }

  const completaTask = (id) => {
    const tareas = task.map(x => {
      if (x.id === id) {
        x.completado = !x.completado;
      }
      return x;
    });
    setTask(tareas);
    console.log("TAREA ACTUALIZADA CORRECTAMENTE");

  }


const deleteTask = (id) => {

  const tareas = task.filter(x => x.id !== id);
  setTask(tareas);
  console.log("Tarea Eliminada Correctamente!");
  console.log(dato.id);

}


const editTask = (idi) => {


  
task.map(x => {
  if(x.id === idi){
    setDato({id: x.id, texto: x.text});
    console.log(x.text);
    setEdit(true);
  }
  return x;
});

console.log(dato);

}



  return (
    <>
      <div className='container mt-5 contenedor'>
        <div className='card carta '>
          <div className='card-header'>
            <AddTask addTarea={addTask} add={edit} dato={dato} setDato={setDato}/>
          </div>
          <div className='card-body row g-2'>
            {task.map(x =>
              <Task key={x.id} id={x.id} completed={x.completado} complete={completaTask} delete={deleteTask} edit={editTask}>
                {x.text}
              </Task>)}
          </div>

        </div>
      </div>
    </>
  );
}


export default TaskList;