function Button (props){

    function createUser(){
        console.log("create user")
    }

    if(props.function === "createUser"){
        return(
            <button onClick={createUser} type={props.type}>{props.label}</button>
        )

    }

    const logout = () => {
        console.log("logout")
        props.setLoggedIn("")
        
    }
    
    if(props.function === "logout")
        return(
            <button onClick={logout} type={props.type}>{props.label}</button>
        )

    return(
        <button type={props.type}>empty</button>
    )
    
}

export default Button