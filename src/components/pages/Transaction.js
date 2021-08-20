import Button from "../common/Button";
import Form from "../common/Form";
import Title from "../common/Title";


function Transaction(props){
    return(
        <>
        <p>{props.loggedIn}</p>
        <Title value="Transaction Page"/>
        <Form 
        page="transaction" 
        users={props.users} 
        setUsers={props.setUsers}/>
        <Button
        function="logout" 
        loggedIn = {props.loggedIn} 
        setLoggedIn = {props.setLoggedIn}
        type = "button"
        label = "Log Out"/>
        </>
    )
}

export default Transaction