import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {

    return( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Users />}></Route>
                <Route path='/create' element={<CreateUser />}></Route>
                <Route path='/edit/:id' element={<UpdateUser />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App






/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
