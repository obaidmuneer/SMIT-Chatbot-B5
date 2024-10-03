import { useState, useEffect } from "react";
import Form from "./Form"
import Todo from "./Todo"


const Todos = () => {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        const data = ["item", "item", "item", "item"]
        console.log("this is working");
        setTodo(data)

        return () => {
            console.log("component unmount");
        }

    }, [])


    return <div>
        <h1>Todo</h1>
        <Form todo={todo} setTodo={setTodo} />
        <Todo data={todo} />
    </div>
}

export default Todos