import Title from "../common/Title"

import Form from "../common/Form"



function Login(props){

    

    return(
        <>
        <Title value="Login Page"/>
        <Form 
        page="login" 
        users={props.users} 
        setUsers={props.setUsers} 
        loggedIn = {props.loggedIn}
        setLoggedIn = {props.setLoggedIn}
        />

        </>
    )
}

export default Login