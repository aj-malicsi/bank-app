import { useState } from "react";

function Display(props){

    for(let i = 0; i < props.users.length; i++){

        return(
            <>
            <p>name: {props.users[i].name}</p>
            <p>balance: {props.users[i].balance}</p>
            </>
        )

    }

    return(
        <p>Display</p>
    )
}

export default Display