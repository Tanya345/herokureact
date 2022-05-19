import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';
import Login from './components/Login';
import { createContext, useState } from 'react';
import PlayMovie from './components/PlayMovie';

export const TokenContext = createContext()

function App() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const parsedToken = JSON.parse(tokenString);
    console.log(parsedToken)
    if (parsedToken !== null) {
      return parsedToken
    }
  }

  const [token, saveToken] = useState(getToken())
  const setToken = (userToken) => {
    if (userToken !== undefined) {
      localStorage.setItem('token', JSON.stringify(userToken))
      saveToken(userToken)
    }
  }

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={!token ? <Login setToken={setToken} /> : <Movies />} />
          <Route exact path="/playMovie" element={!token ? <Login setToken={setToken} /> : <PlayMovie />} />
        </Routes>
      </Router>
    </TokenContext.Provider>

  );
}

export default App;
