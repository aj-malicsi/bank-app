import { useState } from "react";


function WithdrawForm(props){

    const [withdraw, setWithdraw] = useState(0)
    let balance = 0;

    const setBalance = () =>{
        const user = props.loggedIn
        const users = props.users
        console.log("logged in check withdraw",user)
        console.log(users)
        for(let i = 0; i < users.length; i++){
            if(users[i].name === user)
                balance = users[i].balance
        }

    }

    setBalance()


    const handleSubmit = (e) =>{
        e.preventDefault()
        const user = props.loggedIn
        const users = props.users
        console.log("logged in check withdraw",user)
        console.log(users)
        for(let i = 0; i < users.length; i++){
           
            if(users[i].name === user)
                users[i].balance -= parseFloat(withdraw)
                props.setUsers(users)
        }
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <p>Withdraw</p>
    
            <label>Enter Withdraw Amount:</label>
            <input
            type="number"
            value={withdraw}
            min="1"
            max={balance}
            onChange={(e) => setWithdraw(e.target.value)}
            />
            <br></br>
            <button type="submit">Withdraw</button>    
        </form>
        </>
    )
}

export default WithdrawForm