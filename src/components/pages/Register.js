import Input from "../common/Input"
import Title from "../common/Title"
import Button from "../common/Button"





function Register(props){
    return(
        <>
        <Title value="Register Page"/>
        <Input type="text" value="Username"/>
        <Input type="text" value="Password"/>
        <Button type="submit" label="Register"/>
        </>

    )
}


export default Register