import Button from './components/common/Button'
import Title from './components/common/Title'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Transaction from './components/pages/Transaction'

function App() {
  return (
    <div className="App">
      <Title value="Ye Olde Banking App"/>
      <Login />
      <Register/>
      <Transaction />
    </div>
  );
}

export default App;
