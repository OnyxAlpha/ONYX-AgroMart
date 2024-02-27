import React from "react";
import Footer from "./pages/landing/footer/footer.js";
import Signup from "./pages/signup/signup.js";
import Products from "./components/produce.jsx";



function App() {
  return (
    <React.Fragment>
      <Products />
       <Footer />
       <Signup />
    </React.Fragment>
   
  );
    
}


export default App;
