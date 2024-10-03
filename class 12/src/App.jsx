import { useState } from "react";
import Form from "./components/Form"
import Todo from "./components/Todo"
// const App = () => {
//     let [counter, setCounter] = useState(1)
//     // counter = counter + 1
//     console.log(counter);

//     const incrementHandler = () => {
//         // console.log("this is working");
//         setCounter(counter + 1)
//     }

//     return <div>
//         <h1>Hello react</h1>
//         <h1> {counter}</h1>
//         <button onClick={incrementHandler} >Increase</button>
//         <button
//             onClick={() => {
//                 setCounter(counter - 1)
//             }}
//         >Decrease</button>
//     </div>
// }

const App = () => {
    const [todo, setTodo] = useState(["item1", "item2", "item3"])


    return <div>
        <h1>Todo</h1>
        <Form />
        <Todo data={todo} />
    </div>
}

export default App