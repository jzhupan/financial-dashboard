import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Layout />
    </>
  );
}

export default App;
