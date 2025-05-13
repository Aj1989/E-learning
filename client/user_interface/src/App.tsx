import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

function App() {
  const [status, setStatus] = useState({
    status: "",
    name: "",
    address: "",
    id: 0,
    action: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Enterprise App</Typography>
      <Typography>Status: {status.status}</Typography>
      <Typography>Name: {status.name}</Typography>
      <Typography>User ID: {status.id}</Typography>
      <Typography>address: {status.address}</Typography>
    </Container>
  );
}

export default App;
