import { Routes, Route } from "react-router-dom";
import NavComponent from './components/NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Workouts from "./pages/Workouts";
import Register from "./pages/Register";
import AddWorkout from "./pages/AddWorkout";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/add" element={<AddWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
