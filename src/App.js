import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./pages/navbar/index";
import Landing from "./pages/landing/landing";
import About from "./pages/about-page/index";
import Products from "./pages/products-page/index";
import SignUpSignIn  from "./pages/signupSignin-page/index";

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Landing />} />
        <Route path="/about" element= {<About />} />
        <Route path="/products" element= {<Products />} />
        <Route path="/signupsignin" element= {<SignUpSignIn />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
