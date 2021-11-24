import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  let updateUsers = props.users
  const onSubmit = data => {
    console.log(updateUsers)
    console.log(data.username, data.password, data.balance)

    let username = data.username
    let password = data.password
    let balance = data.balance
    

    const bankUser = { username , password, balance} 

    console.log(bankUser)

    updateUsers.push(bankUser)
    console.log("update users =>", updateUsers)
    props.setUsers([...updateUsers])

  }

  console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Username</label>
      <br/>
      <input type="text" defaultValue="Enter Username" {...register("username", {required: true})} />
      {errors.username && <span>This field is required</span>}
      <br/>
    
      <label>Password</label>
      <br/>
      <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
      <br/>

      <label>Balance</label>
      <br/>
      <input
            type="number"
            step="0.01"
            min="0"
            {...register("balance", { required: true })}
          />
      <br/>


      <input type="submit" />
    </form>
  );
}

export default RegisterForm