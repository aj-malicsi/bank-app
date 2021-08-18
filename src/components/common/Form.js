import Button from "./Button";
import Input from "./Input";
import { useState } from "react";



function handleChange(event){
    // setState
}

function Form(props){

    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        const bankUser = { name, balance }
        console.log(bankUser)
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter Name:</label>
            <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label>Enter Initial Balance:</label>
            <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            />
            <button>Create</button>
            

            
        </form>
        </>
    )
}

export default Form