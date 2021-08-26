import Title from "../common/Title"
import Image from '../common/Image'
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
        <Image className="coin" src="https://i.pinimg.com/originals/5a/10/53/5a105381eed609b127ec423c337f64e3.gif"></Image>

        </>
    )
}

export default Login