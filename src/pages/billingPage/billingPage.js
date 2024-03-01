import React, { useState } from "react";
import "./billing.css";

export default function BillingFormWithPayment() {
    const [formInfo, setFormInfo] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInfo({ ...formInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can use the formInfo state for further processing or submission
    };

    return (
        <form className="billingform" onSubmit={handleSubmit}>
            <h2>Billing Information</h2>
            <input type="text" name="fullName" placeholder="Full Name" value={formInfo.fullName} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={formInfo.email} onChange={handleInputChange} />
            <input type="text" name="address" placeholder="Address" value={formInfo.address} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" value={formInfo.city} onChange={handleInputChange} />
            <input type="text" name="country" placeholder="Country" value={formInfo.country} onChange={handleInputChange} />
            
            <h2>Payment Details</h2>
            <input type="text" name="cardNumber" placeholder="Card Number" value={formInfo.cardNumber} onChange={handleInputChange} />
            <input type="text" name="expirationDate" placeholder="Expiration Date" value={formInfo.expirationDate} onChange={handleInputChange} />
            <input type="text" name="cvv" placeholder="CVV" value={formInfo.cvv} onChange={handleInputChange} />
            
            <button type="submit">Submit</button>
        </form>
    );
}