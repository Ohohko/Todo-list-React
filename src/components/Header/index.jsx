import styles from "./header.module.css"

export function Header(){
    return(
<header className={styles.header}>
    <h1>To-do list App</h1>
    <form>
        <input placeholder="add a new task" type="text"/>
        <button>Create</button>
        
    </form>
</header>
 )
 
}
