import { useEffect, useState } from 'react';

export default function FetchUsers() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Usuarios:</h3>

      {users.length > 0 ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
