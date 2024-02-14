import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import UserPage from './Pages/UserPage';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={ <Login />} />
        <Route path='contact' element={ <Contact />} />
        <Route path='bookclub' element={ <UserPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
