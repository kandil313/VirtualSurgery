import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Services, Login ,Signup } from './Components/pages';
import ForgotPassword from './Components/pages/ForgotPassword';
import ResetPassword from './Components/pages/ResetPassword';
import NotFound from './Components/pages/NotFound';




function App() {
  return (
    <>
      <div className="App">
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </div>
    
      
    </>
  );
}



export default App;
