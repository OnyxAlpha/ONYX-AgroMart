import React from "react";
import Footer from "./pages/landing/footer/footer.js";
import Signup from "./pages/signup/signup.js";
import Products from "./components/produce.jsx";
import ProductUploadForm from "./pages/form/productupload.jsx";



function App() {
  return (
    <React.Fragment>
      {/* <Products /> */}
       <Footer />
       <Signup />
       <ProductUploadForm />
    </React.Fragment>
   
  );
    
}


export default App;
