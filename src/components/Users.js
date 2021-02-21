import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const res = await fetch("api/v1/users");
    const data = await res.json();
    setUsers(data);
    console.log(process.env.REACT_APP_API_SERVER_DEVELOPMENT)
  }, []);

  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
