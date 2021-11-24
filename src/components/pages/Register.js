import Form from "../common/Form"





function Register(props){
    return(
        <>

        <div className="p-20 
        bg-yellow-900
        ">
            <div className="border-yellow-500 border-4 bg-yellow-700 p-10 rounded-2xl shadow-lg w-full md:w-1/2 mx-auto">
            <h1 className="text-white text-3x1">

            Sign Up!</h1>
           
        
            <Form page="register" users={props.users} setUsers={props.setUsers}/>
            </div>
        
        </div>

        </>

    )
}


export default Register