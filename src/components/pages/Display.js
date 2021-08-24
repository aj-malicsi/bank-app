import { useState } from "react";

function Display(props){

    const users = props.users

    

    return(
        <>
        <p>display</p>

        {users.map(user =>(
                <div key={user.name}>   
                    <p>name:{user.name}</p>
                    <p>balance:{user.balance}</p>
            
                </div>
            ))}
       
        </>
        
    )
        
}

export default Display