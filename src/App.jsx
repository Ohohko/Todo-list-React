import { useState } from "react"
import { Header } from "./components/Header"
import {Tasks} from "./components/Tasks"


function App() {
const [tasks,setTasks] = useState([]);
function addTasks(tasksTitle){
  setTasks([
    ...tasks,
    {
      id: crypto.randomUUID(),
      title: tasksTitle,
      isComplete: false
    }
  ])
}

  return (
<>
<Header onAddTask={addTasks} />
<Tasks 
tasks={tasks} 
/>
</>
)
}

export default App
