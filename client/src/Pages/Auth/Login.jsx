import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import './Auth.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInStart , signInSuccess , signInFailure } from '../../redux/user/userSlice.js';
import OAuth from '../../Components/OAuth'

function Login() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

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
  // User data Update function
const [formData , setFormData] = useState({});
const [ signUperror , setSignUpError] = useState(null);
const [ loading , setLoading] = useState(false);

const handleChangeSignUp = (e) => { 
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    )
};

// user form Signup Submit
const handleSubmitSignUp = async(e) => { 
  setLoading(true);
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setSignUpError(data.message);
      toast.error(signUperror, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
       
          });
      setLoading(false);
      return;
    }
    setLoading(false);
    console.log(data);
    setSignUpError(null);
    navigator('/usercreated')
    
};

const [signInformData , setSignInFormData] = useState({});
// const [ signInerror , setSignInError] = useState(null);
// const [ signInloading , setSignInLoading] = useState(false);
const { signInloading , error  } = useSelector((state)=> state.user);

const handleChangeSignInPass = (e) => { 
  setSignInFormData(
      {
        ...signInformData,
        password: e.target.value,
      }
    )
};

const handleChangeSignInEmail = (e) => { 
  setSignInFormData(
      {
        ...signInformData,
        email: e.target.value,
      }
    )
};

// user form Signup Submit
const handleSubmitSignIn = async(e) => { 
  // setSignInLoading(true);

try {
  dispatch(signInStart());
  console.log(signInformData);
    e.preventDefault();
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signInformData),
    });
    const data = await res.json();
    if (data.success === false) {
      // setSignInError(data.message);
      toast.error( error , {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
       
          });
          dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data))
    navigator('/')
  }
  catch(e) { 

    dispatch(signInFailure(e.message));
  }
};
// console.log(formData);

  return (
    <>
     <ToastContainer />
    <div className="main-login">

    <button className='link-buttonAuth' onClick={()=>{navigator("/")}}>Home</button>
      <center><h4>Where every goal has a story to tell. Welcome to the heart of soccer!</h4> </center>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          {/* Sign Up code */}
          <form onSubmit={handleSubmitSignUp}>
            <h1>Create Account</h1>
            <OAuth/>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Full Name" id='fullName' onChange={handleChangeSignUp}/>
            <input type="email" placeholder="Email" id='email' onChange={handleChangeSignUp}/>
            <input type="password" placeholder="Password" id='password' onChange={handleChangeSignUp}/>
            <button className='btn' disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container"> 
        {/* Sign In code  */}
          <form onSubmit={handleSubmitSignIn}>
            <h1>Sign in</h1>
          <OAuth/>
            <span>or use your account</span>
            <input type="email" placeholder="Email"   onChange={handleChangeSignInEmail} />
            <input type="password" placeholder="Password"  onChange={handleChangeSignInPass} />
            <a href="#">Forgot your password?</a>
            <button className='btn' disabled={signInloading}>
              {signInloading ? "Loading..." : "Sign In"}
            </button>
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
