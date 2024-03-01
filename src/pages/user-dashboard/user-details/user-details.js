import React from 'react';
import './index.css';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';


export const UserDetails = () => {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  // const [imageNew, setImgNew] = useState('');

  const [addItemsList, setItemsList] = useLocalStorage("User Item List", []);


  const generateUniqueId = (itemList) => {
    let id;
    do {
      // Generate a random ID
      id = Math.floor(Math.random() * 1000000);
      // Check if the ID is already present in the item list
    } while (itemList.some(item => item.id === id));
    return id;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ productImage })

    // Convert image to base64 format
    if (productImage) {
      convertImageToBase64(productImage)
        .then(base64Image => {

          // console.log({ base64Image });
          
          
          let newforValues = {
            id: generateUniqueId(addItemsList),
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            productImage: base64Image
          }
          
          
          setItemsList([...addItemsList, newforValues]);
        })
        .catch(error => {
          console.error('Error converting image to base64:', error);
        });
    } else {
      // Handle case when no image is selected
      console.log("No image selected");
    }
  };

  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // remove the data URI prefix
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(imageFile);
    });

  };



  const handleFileChange = (event) => {
    setProductImage(event.target.files[0]);
  };


  return (
    <>
      <div className="product-upload-container">
      <h2>Upload a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label itemName="productName">Product Name:</label>
        <input type="text" id="productName" value={productName} onChange={(event) => setProductName(event.target.value)} required />

        <label itemName="productDescription">Description:</label>
        <textarea id="productDescription" value={productDescription} onChange={(event) => setProductDescription(event.target.value)} rows="4" cols="50" required />

        <label itemName="productPrice">Price:</label>
        <input type="number" id="productPrice" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} min="0.01" step="0.01" required />

        <label itemName="productImage">Image:</label>
        <input type="file" id="productImage" onChange={handleFileChange} accept="image/*" required />

        <input type="submit" value="Upload Product" />
      </form>
    </div>

    <div>
      {addItemsList.map((list) => <UserDetails data={list} key={list.id} />)}
    </div>
    </>

  );
}


