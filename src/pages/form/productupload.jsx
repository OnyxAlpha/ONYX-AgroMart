import React, { useState } from 'react';
import './productupload.css';


export default function ProductUploadForm() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);

  };

  const handleFileChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  return (
    <div className="product-upload-container">
      <h2>Upload a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label itemName="productName">Product Name:</label><br />
        <input type="text" id="productName" value={productName} onChange={(event) => setProductName(event.target.value)} required /><br /><br />

        <label itemName="productDescription">Description:</label><br />
        <textarea id="productDescription" value={productDescription} onChange={(event) => setProductDescription(event.target.value)} rows="4" cols="50" required /><br /><br />

        <label itemName="productPrice">Price:</label><br />
        <input type="number" id="productPrice" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} min="0.01" step="0.01" required /><br /><br />

        <label itemName="productImage">Image:</label><br />
        <input type="file" id="productImage" onChange={handleFileChange} accept="image/*" required /><br /><br />

        <input type="submit" value="Upload Product" />
      </form>
    </div>
  );
}



