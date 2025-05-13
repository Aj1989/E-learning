import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Enterprise App</Typography>
      <Typography>Status: {status}</Typography>
    </Container>
  );
}

export default App;
