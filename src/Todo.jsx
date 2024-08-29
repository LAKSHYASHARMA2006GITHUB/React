import { useState } from "react"
export default function TodoList() {
    let [Todo, setTodo] = useState(["sample task"]);
    let [newTodo, setnewTodo] = useState([]);

    let addnewTask=()=>{
        setTodo([...Todo,newTodo]);
        setnewTodo("");
    }

    let updateTask =(event)=>{
    setnewTodo(event.target.value);
   
    }
    return (
        <div>
            <h2>Todo list</h2>
            <input type="text" placeholder="Add the tasks's" value={newTodo} onChange={updateTask}/>
            <br />
            <br />
            <button onClick={addnewTask}>ADD</button>
            <hr />
            <ul>

                {
                    Todo.map((todos) => (
                        <li>{todos}</li>
                    ))
                    }
            </ul>
        </div>
    )
}
