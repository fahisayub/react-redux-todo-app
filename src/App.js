import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import TodoApp from './pages/TodoApp'
import {Routes, Route,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
function App() {
  const {isLoggedin}=useSelector(state=>state.auth);
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/todo" element={
        isLoggedin?
      <TodoApp/>:<Navigate to='/login'/>
      
      }/>
      <Route path="/login"element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
