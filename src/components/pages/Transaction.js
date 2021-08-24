import Button from "../common/Button";
import DisplayButton from "../common/DisplayButton";
import Title from "../common/Title";
import DepositForm from "../Transaction/DepositForm";
import TransferForm from "../Transaction/TransferForm";
import WithdrawForm from "../Transaction/WithdrawForm";



function Transaction(props){
    return(
        <>
        <p>Welcome, {props.loggedIn}!</p>
        <Title value="Transaction Page"/>
        
        <DepositForm 
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={ props.setUsers }
        />

        <WithdrawForm
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={props.setUsers}/>

        <TransferForm
        loggedIn={props.loggedIn} 
        setLoggedIn={props.setLoggedIn}
        users={props.users} 
        setUsers={props.setUsers}/>



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

        </>

        
    )
}

export default Transaction