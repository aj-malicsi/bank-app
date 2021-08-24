import { useState } from 'react'
import Title from './components/common/Title'
import Display from './components/pages/Display'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Transaction from './components/pages/Transaction'



function App() {

  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState("")

  console.log(loggedIn,"is logged in")
  
  
    
  if(users.length > 0)
    console.log("app level users",users)

  return (
    <div className="App">
      
      <Title value="Ye Olde Banking App"/>

      {!loggedIn && 
      <Login 
      users = {users} 
      setUsers = {setUsers} 
      loggedIn = {loggedIn} 
      setLoggedIn = {setLoggedIn}
      />}

      
      
      {!loggedIn && <Register users = {users} setUsers = {setUsers}/>}
      
      
      {loggedIn && 
      <Transaction 
      users = {users} 
      setUsers={setUsers}
      loggedIn = {loggedIn} 
      setLoggedIn = {setLoggedIn}/>}

      {/* <Display
      users = {users} 
      setUsers = {setUsers} 
      />
       */}
    </div>
  );
}

export default App;
