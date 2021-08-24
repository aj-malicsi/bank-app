

function DisplayButton (props){

    const change = () =>{
        if(props.isClicked === false)
            props.setIsClicked(true)
        else
            props.setIsClicked(false)
    }

    return(
        <button onClick={change} type="button">Display</button>
    )
    
}

export default DisplayButton