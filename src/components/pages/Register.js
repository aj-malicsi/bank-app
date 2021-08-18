import Input from "../common/Input"
import Title from "../common/Title"
import Button from "../common/Button"
import Form from "../common/Form"





function Register(props){
    return(
        <>
        <Title value="Create New User"/>
        {/* <Input type="text" value="Username"/>
        <Input type="text" value="Password"/>
        <Button function="createUser" type="submit" label="Register"/> */}
        <Form />
        </>

    )
}


export default Register