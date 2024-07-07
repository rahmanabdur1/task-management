import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';


const Register = () => {
  const { email, setEmail, password, setPassword, role, setRole, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <Link to='/login'>Login</Link>
      </form>
    </div>
  );
};

export default Register;
