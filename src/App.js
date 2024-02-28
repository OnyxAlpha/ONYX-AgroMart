import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./pages/landing/landing";
import Products from "./pages/products-page/index";
import SignIn  from "./pages/signupSignin-page/signIn";
import { ShopContextProvider } from "./context/shop-context";
import Cart  from "./pages/cart/cart";
import SignUp from "./pages/signupSignin-page";
import About from './pages/about-page'
import { UserDashboard } from "./pages/user-dashboard";

function App() {
  return (
   <>
   <ShopContextProvider>
    <Router>
      <Routes>
        <Route path="/" element= {<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element= {<Products />} />
        <Route path="/signin" element= {<SignIn />} />
        <Route path="/cart" element= {<Cart />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/dashboard" element= {<UserDashboard />} />
      </Routes>
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
