
import './App.css'
import  { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './Components/HeaderNav'
import HomePage from './Pages/HomePage'
import Subscription from './Pages/Subscription'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
function App() {

  return (
    <>
       <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <HeaderNav/>
          <Routes>
            <Route path="/" element={<HomePage/>} /> {/* Use HomeIndex component for the root path */}
            <Route path="subscribe" element={<Subscription/>} /> {/* Use BookTable component for the /booktable path */}
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
          </Routes>
        </Suspense>
      </Router>      
    </>
  )
}

export default App
