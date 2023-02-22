import styles from "./header.module.css"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useState } from "react"


export function Header({onAddTask}){
 const [title, setTitle] = useState('');

 function handleSubmit(event){
    event.preventDefault();
    onAddTask(title);
    setTitle('');
 }
 
 function onChangeTitle(event){
    setTitle(event.target.value);
 }
 
 return(
<header className={styles.header}>
    <h1>To-do list App</h1>
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task..." type="text" value={title} onChange={onChangeTitle}/>
        <button>Create
         <AiOutlinePlusCircle size={22}/>   
        </button>
        
    </form>
</header>
 )
 
}
