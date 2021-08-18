function Button (props){

    function createUser(){
        console.log("create user")
    }

    if(props.function === "createUser"){
        return(
            <button onClick={createUser} type={props.type}>{props.label}</button>
        )

    }

    return(
        <button type={props.type}>{props.label}</button>
    )
    
}

export default Button