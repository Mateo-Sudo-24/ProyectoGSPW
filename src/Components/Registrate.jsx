import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database'; // Importar Realtime Database
import { auth } from '../firebase';

const Registrate = () => {
  const navigate = useNavigate();
  const db = getDatabase(); // Conectar con Realtime Database
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    role: 'user' // Rol por defecto
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.contrasena !== formData.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.correo, formData.contrasena);
      const user = userCredential.user;

      // Guardar datos en Realtime Database con el rol seleccionado
      set(ref(db, 'users/' + user.uid), {
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        email: formData.correo,
        role: formData.role
      });

      navigate('/login');
    } catch (error) {
      setError('Error al crear la cuenta');
    }
  };

  return (
    <div className="registro-container">
      <h1>Únete a AcademyBEE</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} required />
        <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} required />
        <input type="password" name="confirmarContrasena" placeholder="Confirmar Contraseña" onChange={handleChange} required />

        <label>Rol:</label>
        <select name="role" onChange={handleChange} value={formData.role}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
          <option value="social">Plan Social</option>
        </select>

        <button type="submit">Crear Cuenta</button>
      </form>
      {error && <p>{error}</p>}
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
    </div>
  );
};

export default Registrate;
