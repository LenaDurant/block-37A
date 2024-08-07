import { Routes, Route, Link } from "react-router-dom"
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';
import './App.css'

const App = () => {
  return (
   <>
    <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/SignUpForm" element={<h1>Register</h1>} />
          <Link to="/" element={<h1>Home</h1>} />
        </div>
        <div id="main-section">{
         <Routes>
          <Route path="/SignUpForm" element={<Register/>} />
          <Route path="/" element={<Home/>} />
         </Routes>
      }            
      </div>
    </div>

    <Authenticate />
    <SignUpForm />
   </>
  );
};

export default App