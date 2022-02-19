import { Routes, Route } from "react-router-dom";
import NavComponent from './components/NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foods" element={<Foods />} />

      </Routes>
    </div>
  );
}

export default App;
