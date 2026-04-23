import { useEffect, useState } from "react";

import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
