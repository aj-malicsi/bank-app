
import Title from "../common/Title"
import Form from "../common/Form"





function Register(props){
    return(
        <>
        <Title value="Create New User"/>
    
        <Form page="register" users={props.users} setUsers={props.setUsers}/>
        </>

    )
}


export default Register