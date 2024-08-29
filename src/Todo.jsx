import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [Todo, setTodo] = useState([{ task: "sample", id: uuidv4() }]);
    let [newTodo, setnewTodo] = useState([]);

    let addnewTask = () => {

        setTodo((prevtodos) => {
            return [...prevtodos, { task: newTodo, id: uuidv4() }];
        });
        setnewTodo("");
    }

    let updateTask = (event) => {
        setnewTodo(event.target.value);

    }

    let deleteTODO = (id) => {
        setTodo((prevtodo) => Todo.filter((prevtodo) => prevtodo.id != id));

    }

    let toUppercase = () => {
        setTodo((prevtodo) => Todo.map((prevtodo) => {
            return {
                ...prevtodo,
                task: prevtodo.task.toUpperCase()
            }
        }))
    }

    let toUppercaseone=(id)=>{
        setTodo((prevtodo) => prevtodo.map((Todo) => {
            if(Todo.id == id){
                return {
                    ...Todo,
                    task: Todo.task.toUpperCase()
                }
            }
            else{
                return Todo;
            }
           
        }))
    }

    let Markdone =()=>{

    }

    
    return (
        <div>
            <h2>Todo list</h2>
            <input type="text" placeholder="Add the tasks's" value={newTodo} onChange={updateTask} />
            <br />
            <br />
            <button onClick={addnewTask}>ADD</button>
            <hr />
            <ul>

                {
                    Todo.map((todos) => (
                        <li key={todos.id}>
                            <span>{todos.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTODO(todos.id)}>Delete</button>
                            <button onClick={()=>toUppercaseone(todos.id)}>Touppercase</button>

                        </li>


                    ))
                }
            </ul>
            <button onClick={toUppercase}>To upper case</button>
        </div>
    )
}
