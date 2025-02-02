type="javascript"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import '../CSS_Components/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ correo: '', contrasena: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.correo,
        formData.contrasena
      );
      
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem('userRole', userData.role);
        navigate('/dashboard');
      } else {
        setError('Usuario sin rol asignado');
      }
    } catch (error) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
    </div>
  );
};

export default Login;