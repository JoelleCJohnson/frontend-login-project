import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Landing from './pages/Landing';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [signedUp, setSignedUp] = useState(false)

  return (
    <>
      <Header />
      <hr />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<SignUp />}/>
        <Route path="/landing" element={<Landing />} />
      </Routes>
        <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} signedUp={signedUp} setSignedUp={setSignedUp} />
      </BrowserRouter>
      <hr />
      <Footer />
    </>
  )
}

export default App;
