
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
            <label className="text-white" >Enter Name:</label>
            <input 
            className="bg-yellow-100 rounded m-1 p-2 h-8"
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br/>

            <label className="text-white" >Enter Initial Balance:</label>
            <input
            className="bg-yellow-100 rounded m-1 p-2 h-8"
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            />
            <br/>
            <button className="rounded bg-green-800 hover:bg-green-600 text-gray-100 p-1"
            type="submit">CREATE</button>    
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
        <div className="h-1/2 flex justify-center items-center">
        <form onSubmit={handleLoginSubmit}>
            <label className="text-white" >Enter Name:</label>
            <input 
            className="bg-yellow-100 rounded m-1 p-2 h-8"
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <button className="ml-36 my-1
            bg-green-800 hover:bg-green-600 text-gray-100 p-1 rounded" type="submit">Log In</button>    
           
        </form>
        </div>
        </>
    )
    

    return(
        <p>empty form</p>
    )
}

export default Form