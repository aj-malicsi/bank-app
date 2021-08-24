
import { useState } from "react";





// let users = props.users

function Form(props){

    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0)


    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const bankUser = { name, balance }

        let updateUsers = props.users
        updateUsers.push(bankUser)
        
        props.setUsers([...updateUsers])
        

    }

    

    if(props.page === "register")
    return(
        <>
        <form onSubmit={handleRegisterSubmit}>
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
            <button type="submit">Create</button>    
        </form>
        </>
    )

    const handleTransactionSubmit = (e) =>{
        e.preventDefault()

    }

    

    
    function findUser(){
        let users = props.users
        
        for(let i = 0; i < users.length; i++){
            if(name === users[i].name)
                return true;
        }

        return false;
    }

    const handleLoginSubmit = (e) =>{
        e.preventDefault()
        if(findUser()){
            console.log(name)
            props.setLoggedIn(name)
            
        }     
        else
            console.log("user doesn't exist")

    } 
    
    
    if(props.page === "login")
    return(
        <>
        <form onSubmit={handleLoginSubmit}>
            <label>Enter Name:</label>
            <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">Login</button>    
        </form>
        </>
    )
    

    return(
        <p>empty form</p>
    )
}

export default Form