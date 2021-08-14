import Button from "../common/Button";
import Input from "../common/Input";
import Title from "../common/Title";


function Transaction(props){
    return(
        <>
        <Title value="Transaction Page"/>
        <Input type="number" value="Deposit"/>
        <Input type="number" value="Withdraw"/>
        </>
    )
}

export default Transaction