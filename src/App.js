import { useState } from 'react'
import Title from './components/common/Title'
import Display from './components/pages/Display'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Transaction from './components/pages/Transaction'
import Image from './components/common/Image'


function App() {

  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  console.log(loggedIn,"is logged in")
  
  
    
  if(users.length > 0)
    console.log("app level users",users)

  return (
    <div className="App">
      
      <Title value="Ye Olde Banking App"/>

    
      {!loggedIn && <Register users = {users} setUsers = {setUsers}/>}
      {!loggedIn && 
      <Login 
      users = {users} 
      setUsers = {setUsers} 
      loggedIn = {loggedIn} 
      setLoggedIn = {setLoggedIn}
      />}
      
      
      {loggedIn && 
      <Transaction 
      users = {users} 
      setUsers={setUsers}
      loggedIn = {loggedIn} 
      setLoggedIn = {setLoggedIn}
      isClicked = {isClicked}
      setIsClicked = {setIsClicked}/>}

      {isClicked && 
      <Display
      users = {users} 
      setUsers = {setUsers} 
      />}

      
      
    </div>
  );
}

export default App;
