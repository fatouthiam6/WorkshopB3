import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Admin from "./pages/Admin";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate />} replace to="home" />
          <Route path="home" element={<Home />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
