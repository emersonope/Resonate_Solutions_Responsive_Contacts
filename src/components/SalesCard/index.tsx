import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

function SalesCard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="contacts-card">
      <h2 className="contacts-sales">Users</h2>
      <table className="contacts-sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesCard;
