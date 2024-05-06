
import './Football.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GoogleAuthProvider , getAuth, signInWithPopup} from '@firebase/auth';
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess} from '../redux/user/userSlice.js'



function OAuth() {
  const dispatch = useDispatch();
const handleGoogleClick = async() => {
  
  try {
    console.log("Inside OAuth Google Login");
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);
    const res = await fetch('/api/auth/google' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo : result.user.photoURL }),
    })

    const data = await res.json();
    dispatch(signInSuccess(data));
    console.log(data);
  } catch (error) {
    console.log("cant signin ", error);
  }

}

  return (
    <>
            <div className="social-container">
              <button type='button' className="social"><FacebookIcon /></button>
              <button type='button' onClick={handleGoogleClick} className="social"><GoogleIcon /></button>
              <button type='button' className="social"><LinkedInIcon /></button>
            </div>
    </>
  )
}

export default OAuth