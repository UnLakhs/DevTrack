import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return <></>;
}

export default App;
