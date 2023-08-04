import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import axios, { AxiosError } from "axios";
//import styled from 'styled-components';


interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios
          .get<User[]>("https://jsonplaceholder.typicode.com/photos")
        setUsers(res.data)
      }
      catch (err) {
        setError((err as AxiosError).message)
      }
    } 

    fetchUsers()
    //get -> await promise -> res / err

      // .then((res) => setUsers(res.data))
      // .catch(err => setError(err.message))
  }, []);

  return (
    <>
    {error && <p className="text-danger">{error}</p>}
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
