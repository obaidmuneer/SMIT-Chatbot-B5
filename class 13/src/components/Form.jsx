
import React, { useRef, useState } from 'react'

const Form = ({ setTodo, todo }) => {
    const [val, setVal] = useState("")
    const valRef = useRef("")

    const inputValHandler = (e) => {
        // console.log(e.target.value, "this is working");
        setVal(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(valRef.current, "this is ref val");
        const currVal = valRef.current.value
        // setTodo([...todo, currVal])
        setTodo((prev) => {
            return [...prev, currVal]
        })

    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <input ref={valRef} type="text" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form