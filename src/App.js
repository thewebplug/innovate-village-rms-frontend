import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RegStudent from "./pages/Admin/RegStudent";
import Result from "./pages/Admin/Result";
import StudentResult from "./pages/Student/Result";
import ScratchCards from "./pages/Admin/ScratchCards";
import Login from "./pages/Student/Login";
import Home from "./pages/Admin/Home";
import ScratchCard from "./pages/Student/ScratchCard";
import Students from "./pages/Admin/Students";
import AdminLogin from "./pages/Admin/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Onboarding from "./pages/School/Onboarding";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/register-student" element={<RegStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/result/:id" element={<StudentResult />} />
        <Route path="/result" element={<Result />} />
        <Route path="/cards" element={<ScratchCards />} />
        <Route path="/card/:id" element={<ScratchCard />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
