import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=").then((response) => {
      setUsers(response.data.data);
    });
  }, []);


  return <div className="App">
    {users.map((element)=>(<h1>{element.email}</h1>))}
  </div>;
}

export default App;
