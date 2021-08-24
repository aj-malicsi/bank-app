import { useState } from "react";


function TransferForm(props){

    const [amount, setAmount] = useState(0)
    const [transferUser, setTransferUser] = useState('')

    const user = props.loggedIn
    const users = props.users


    const balanceCheck = () => {
        
        for(let i = 0; i < users.length; i++){
            if(users[i].name === user){
                console.log(users[i], user)       
                if(users[i].balance >= amount){
                    users[i].balance -= parseFloat(amount)
                    props.setUsers(users)
                    return true
                } 

                else{
                    console.log(users[i].name, "has insufficient balance",users[i].balance)
                    return false
                }
                    
            }

        }
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        // const user = props.loggedIn
        // const users = props.users
        console.log("logged in check transfer",user)
        console.log("transfer users check", users)
        for(let i = 0; i < users.length; i++){
            // console.log(users[i], user)
            if(users[i].name === transferUser){
                console.log(users[i].name, transferUser)             
                if(balanceCheck()){
                    console.log("balance is true")
                    users[i].balance += parseFloat(amount)
                    props.setUsers(users)
                }
                    

            }
        }
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <p>Transfer</p>
    
            <label>Enter Transfer Amount:</label>
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />

            <label>Transfer To:</label>
            <input
            type="text"
            value={transferUser}
            onChange={(e) => setTransferUser(e.target.value)}
            />

            <button type="submit">Transfer</button>    
        </form>
        </>
    )
}


export default TransferForm