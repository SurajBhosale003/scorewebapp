import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Auth.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Login() {
  const navigator = useNavigate();
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUp = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignIn = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener('click', handleSignUp);
    signInButton.addEventListener('click', handleSignIn);

    return () => {
      signUpButton.removeEventListener('click', handleSignUp);
      signInButton.removeEventListener('click', handleSignIn);
    };
  }, []);


  return (
    <>
    <div className="main-login">

    <button className='link-buttonAuth' onClick={()=>{navigator("/")}}>Home</button>
      <center><h4>Where every goal has a story to tell. Welcome to the heart of soccer!</h4> </center>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          {/* Sign Up code */}
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
            <a href="#" className="social"><FacebookIcon /></a>
              <a href="#" className="social"><GoogleIcon /></a>
              <a href="#" className="social"><LinkedInIcon /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className='btn'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container"> 
        {/* Sign In code  */}
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
            <a href="#" className="social"><FacebookIcon /></a>
              <a href="#" className="social"><GoogleIcon /></a>
              <a href="#" className="social"><LinkedInIcon /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className='btn'>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className='small-titles-auth'>Crafting the symphony of soccers spirit.</p>
              <button className=" btn ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Score Saga</h1>
              <p className='small-titles-auth'>From pitch to podium, every moment tells a tale.</p>
              <button className=" btn ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Login;
