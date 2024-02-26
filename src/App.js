import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./pages/landing/header/index";
import Landing from "./pages/landing/landing";
import About from "./pages/about/index";
import Products from "./pages/products/index";
import Signup  from "./pages/signup/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
