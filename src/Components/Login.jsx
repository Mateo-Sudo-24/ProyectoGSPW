import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { getDatabase, ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setRole(snapshot.val().role);
        }
      } else {
        navigate('/login');
      }
    };

    fetchUserRole();
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user?.email} ({role})</p>

      {role === 'admin' && <button>Administrar Usuarios</button>}
      {role === 'user' && <p>Acceso normal</p>}
      {role === 'social' && <p>Acceso con beneficios del plan social</p>}
    </div>
  );
};

export default Dashboard;
