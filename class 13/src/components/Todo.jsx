import React from 'react'
import Item from "./Item"
const Todo = ({ data }) => {
    // console.log(data, "this is in todo");

    return (
        <div>
            <h1>Hello props</h1>
            {
                data.map((item, i) => {
                    console.log(item);
                    return <Item key={i} >{item}</Item>
                })
            }
        </div>
    )
}

export default Todo