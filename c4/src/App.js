import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prod" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<div>404 Page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
