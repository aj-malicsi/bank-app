import { useState } from "react";


function DepositForm(props){

    const [deposit, setDeposit] = useState(0)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const user = props.loggedIn
        const users = props.users
        console.log("logged in check deposit",user)
        console.log(users)
        for(let i = 0; i < users.length; i++){
            // console.log(users[i], user)
            if(users[i].name === user){                
                users[i].balance += parseFloat(deposit)
                props.setUsers(users)

            }
        }
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <p>Deposit</p>
    
            <label>Enter Deposit Amount:</label>
            <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            />
            <button type="submit">Deposit</button>    
        </form>
        </>
    )
}

export default DepositForm