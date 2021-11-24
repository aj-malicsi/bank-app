import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import Title from './components/common/Title'
import Display from './components/pages/Display'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Transaction from './components/pages/Transaction'
import Image from './components/common/Image'
import RegisterForm from './components/Forms/RegisterForm'


function App() {

  const [users, setUsers] = useState([])
  // const [passwords, setPasswords] = useState([])
  const [loggedIn, setLoggedIn] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  console.log(loggedIn,"is logged in")

  console.log("app users =>", users)
  
  
    
  if(users.length > 0)
    console.log("app level users",users)

  return (
    <div className="App">
      
      {/* <Title value="Ye Olde Banking App"/>

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
      setLoggedIn = {setLoggedIn}
      isClicked = {isClicked}
      setIsClicked = {setIsClicked}/>}

      {isClicked && 
      <Display
      users = {users} 
      setUsers = {setUsers} 
      />} */}

      

    <Router>
      <Routes>
        <Route exact path="/register" 
               element={<RegisterForm
                        users = {users} 
                        setUsers = {setUsers} 
                        loggedIn = {loggedIn} 
                        setLoggedIn = {setLoggedIn} />
                        }>
        </Route>
      </Routes>
    </Router>

      
      
    </div>
  );
}

export default App;
