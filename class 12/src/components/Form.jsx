
import React, { useState } from 'react'

const Form = () => {
    const [val, setVal] = useState("")

    const inputValHandler = (e) => {
        // console.log(e.target.value, "this is working");
        setVal(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(val);
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <input onChange={inputValHandler} type="text" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form