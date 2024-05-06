
import './Auth.css';
import { useNavigate } from 'react-router-dom'

function UserCreated() {
  const navigator = useNavigate();
  return (
    <div className="container-createdUser">
      <h1>User has created an account</h1>
      <button className="signin-btn-createdUser" onClick={()=>{ navigator('/auth')}}>Sign In</button>
    </div>
  );
}

export default UserCreated;
