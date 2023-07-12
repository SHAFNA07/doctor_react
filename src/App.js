import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Book from './components/Book';
import Appointments from './components/Appointments';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import View from './components/View';
import Register from './components/Register';
import Login from './components/Login';
import Adminlogin from './components/Adminlogin';




function App() {
  const currentUser = false;

  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/appointments' element={<Appointments/>}></Route>
      <Route path="/register" element={currentUser ? <Home/> : <Register />}> </Route>
    <Route path="/login" element={currentUser ? <Home/> : <Login />}> </Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='edit/:id' element={<Edit/>}></Route>
      <Route path='view/:id' element={<View/>}></Route>
      <Route path="/adminlogin" element={currentUser ? <Appointments/> : <Adminlogin />}> </Route>


      </Routes> 
     
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
