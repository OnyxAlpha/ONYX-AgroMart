import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./pages/navbar/index";
import Landing from "./pages/landing/landing";
import About from "./pages/about-page/index";
import Products from "./pages/products-page/index";
import SignUpSignIn  from "./pages/signupSignin-page/index";
import { ShopContextProvider } from "./context/shop-context";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
   <>
   <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Landing />} />
        <Route path="/about" element= {<About />} />
        <Route path="/products" element= {<Products />} />
        <Route path="/signupsignin" element= {<SignUpSignIn />} />
        <Route path="/cart" element= {<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
