function Title(props){

    if(props.value ==="Ye Olde Banking App")
    return(
        <p className="title">{props.value}</p>
    )

    return(
        <p className="page">{props.value}</p>
    )

}

export default Title;