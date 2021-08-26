import Button from "../common/Button";
import DisplayButton from "../common/DisplayButton";
import Title from "../common/Title";
import DepositForm from "../Transaction/DepositForm";
import TransferForm from "../Transaction/TransferForm";
import WithdrawForm from "../Transaction/WithdrawForm";
import Image from '../common/Image'





function Transaction(props){
    // function findUser(){
    //     const user = props.user
    //     const users = props.users

    //     for(let i = 0; i < users.length; i++){
    //         if(users[i].name === user){
    //             return i;
    //         }
    //     }
    
    // }
    return(
        <>
        <p className="welcome">Welcome, {props.loggedIn}!</p>
        <Title value="Transaction Page"/>
        
        {!props.isClicked &&
        <DepositForm 
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={ props.setUsers }
        />
        }

        {!props.isClicked &&
        <WithdrawForm
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={props.setUsers}/>
        }

        {!props.isClicked &&
        <TransferForm
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={props.setUsers}/>
        }

        {/* <p>Balance:{props.users[findUser()].balance}</p> */}




        <Button
        function="logout" 
        loggedIn = {props.loggedIn} 
        setLoggedIn = {props.setLoggedIn}
        type = "button"
        label = "Log Out"/>

        <DisplayButton
        users={props.users} 
        setUsers={props.setUsers}
        isClicked = {props.isClicked}
        setIsClicked = {props.setIsClicked}
        />

        <Image className="pile" src="https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif"></Image>

        </>

        
    )
}

export default Transaction