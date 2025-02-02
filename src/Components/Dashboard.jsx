import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../CSS_Components/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [allCursos, setAllCursos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [nuevoCurso, setNuevoCurso] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    categoria: ''
  });
  const [editando, setEditando] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        cargarCursos();
        cargarTodosLosCursos();
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const cargarCursos = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, 'cursos'), where('userId', '==', auth.currentUser.uid))
      );
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCursos(docs);
    } catch (error) {
      console.error('Error al cargar cursos:', error);
    }
  };

  const cargarTodosLosCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'cursos'));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllCursos(docs);
    } catch (error) {
      console.error('Error al cargar todos los cursos:', error);
    }
  };

  const handleCerrarSesion = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const crearCurso = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'cursos'), {
        ...nuevoCurso,
        userId: user.uid,
        userEmail: user.email,
        fecha: new Date().toISOString()
      });
      setNuevoCurso({ titulo: '', descripcion: '', precio: '', categoria: '' });
      cargarCursos();
      cargarTodosLosCursos();
    } catch (error) {
      console.error('Error al crear curso:', error);
    }
  };

  const eliminarCurso = async (id) => {
    try {
      await deleteDoc(doc(db, 'cursos', id));
      cargarCursos();
    } catch (error) {
      console.error('Error al eliminar curso:', error);
    }
  };

  const actualizarCurso = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'cursos', editando.id), {
        ...nuevoCurso
      });
      setEditando(null);
      setNuevoCurso({ titulo: '', descripcion: '', precio: '', categoria: '' });
      cargarCursos();
    } catch (error) {
      console.error('Error al actualizar curso:', error);
    }
  };

  const cursosFiltrados = allCursos.filter(curso => 
    curso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    curso.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    curso.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="dashboard-main">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="user-welcome">
            <p>Bienvenido, {user?.email}</p>
          </div>
          <button onClick={handleCerrarSesion} className="logout-button">
            Cerrar Sesión
          </button>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="dashboard-content">
          <div className="crud-section">
            <div className="crud-card">
              <h2>Crear Curso</h2>
              <form onSubmit={editando ? actualizarCurso : crearCurso}>
                <div className="form-group">
                  <input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={nuevoCurso.titulo}
                    onChange={(e) => setNuevoCurso({...nuevoCurso, titulo: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    placeholder="Descripción"
                    value={nuevoCurso.descripcion}
                    onChange={(e) => setNuevoCurso({...nuevoCurso, descripcion: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={nuevoCurso.precio}
                    onChange={(e) => setNuevoCurso({...nuevoCurso, precio: e.target.value})}
                    min="0"
                    step="0.01"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    value={nuevoCurso.categoria}
                    onChange={(e) => setNuevoCurso({...nuevoCurso, categoria: e.target.value})}
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="soldadura">Soldadura</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="alfabetizacion">Alfabetización</option>
                    <option value="agricultura">Siembra y Agricultura</option>
                    <option value="ofimatica">Uso de Ofimática</option>
                  </select>
                </div>

                <button type="submit" className="crud-button">
                  {editando ? 'Actualizar' : 'Crear'} Curso
                </button>
              </form>
            </div>

            <div className="crud-card">
              <h2>Cursos Disponibles</h2>
              <div className="cursos-grid">
                {cursosFiltrados.map((curso) => (
                  <div key={curso.id} className="curso-item">
                    <h3>{curso.titulo}</h3>
                    <p>{curso.descripcion}</p>
                    <p className="precio">Precio: ${parseFloat(curso.precio).toFixed(2)}</p>
                    <p className="categoria">Categoría: {curso.categoria}</p>
                    <p className="vendedor">Instructor: {curso.userEmail}</p>
                    {curso.userId === user?.uid && (
                      <div className="buttons-container">
                        <button 
                          onClick={() => {
                            setEditando(curso);
                            setNuevoCurso(curso);
                          }}
                          className="edit-button"
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => eliminarCurso(curso.id)}
                          className="delete-button"
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;