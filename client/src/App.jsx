
import './App.css'
import  { Suspense ,lazy  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeaderNav from './Components/HeaderNav'
const HomePage = lazy(() => import('./Pages/HomePage'));
const Subscription = lazy(() => import('./Pages/Subscription'));
const Login = lazy(() => import('./Pages/Auth/Login'));
const UserCreated = lazy(() => import('./Pages/Auth/UserCreated'));
import Loading from './Components/Loading'

function App() {

  return (
    <>
       <Router>
        <Suspense fallback={<Loading/>}>
      
          <Routes>
            <Route path="/" element={<HomePage/>} /> {/* Use HomeIndex component for the root path */}
            <Route path="subscribe" element={<Subscription/>} /> {/* Use BookTable component for the /booktable path */}
            <Route path="auth" element={<Login/>} />
            <Route path="usercreated" element={<UserCreated/>} />
         
          </Routes>
        </Suspense>
      </Router>      
    </>
  )
}

export default App
