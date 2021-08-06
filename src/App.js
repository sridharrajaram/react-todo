import { useState } from "react";
import './App.css';

function App() {

  const [task, setTask] = useState([
    {
      id: 1,
      taskName: "Buy Grocery",
      isDone: false
    },
    {
      id: 2,
      taskName: "Buy Medicine",
      isDone: false
    },
    {
      id: 3,
      taskName: "Buy Milk",
      isDone: false
    }
  ]) 


  let changeTaskStatus = (id,checkStat) => {
    let taskIndex = task.findIndex((obj)=>obj.id==id);
    checkStat ? task[taskIndex].isDone=true :task[taskIndex].isDone=false;
    setTask([...task]);
  }
  return (
    <div className="container">
      <ul>
        {
          task.map((list)=>{
            return <li type="none" style={{textDecoration: list.isDone ? "line-through" : ""}}><input type="checkbox" onChange={(e)=>{
              console.log(e);
              changeTaskStatus(list.id,e.target.checked)}}/>{list.taskName}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
