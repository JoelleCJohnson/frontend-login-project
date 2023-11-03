import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Home />

      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
