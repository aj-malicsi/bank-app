import Title from "../common/Title"
import Image from '../common/Image'
import Form from "../common/Form"



function Login(props){

    

    return(
        <>  {/* fragment start */}
        

        {/* <Title value="Login Page"/> */}

        <div className="p-20 
        bg-yellow-900
        h-1/2 flex justify-center items-center
        ">
        
        <div className="border-yellow-500 border-4 bg-yellow-700 p-10 rounded-2xl shadow-lg w-full md:w-1/2 mx-auto">
        <Form 
        page="login" 
        users={props.users} 
        setUsers={props.setUsers} 
        loggedIn = {props.loggedIn}
        setLoggedIn = {props.setLoggedIn}
        />
        {/* <Image className="coin" src="https://i.pinimg.com/originals/5a/10/53/5a105381eed609b127ec423c337f64e3.gif"></Image> */}
        </div>
        </div>

        {/* fragment end */}
        </> 
    )
}

export default Login