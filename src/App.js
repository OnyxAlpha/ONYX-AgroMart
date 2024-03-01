import React from "react";
import Footer from "./pages/landing/footer/footer.js";
import Signup from "./pages/signup/signup.js";
import Products from "./components/produce.jsx";
import ProductUploadForm from "./pages/form/productupload.jsx";
import Billingform from "./pages/billing_form/billingform.js";
import BillingFormWithPayment from "./pages/billing_form/billingform.js";



function App() {
  return (
    <React.Fragment>
      {/* <Products /> */}
       <Footer />
       <Signup />
       <ProductUploadForm />
       <BillingFormWithPayment />
    </React.Fragment>
   
  );
    
}


export default App;
