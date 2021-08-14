import Title from "../common/Title"
import Input from "../common/Input"
import Button from "../common/Button"



function Login(){

    return(
        <>
        <Title value="Login Page"/>
        <Input type="text" value="Username"/>
        <Input type="password" value="Password"/>
        <Button type="submit" label="Login"/>
        </>
    )
}

export default Login