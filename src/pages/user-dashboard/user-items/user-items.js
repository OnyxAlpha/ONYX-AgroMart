import React from 'react'
import { useState } from 'react';

export const UserItems = () => {
    let [userData, setUserData] = useState({
        id: null,
        itemname: '',
        description: '',
        productImage: '',
        price: ''
    });
    
    // State to hold all items data
    const [allUsers, setAllItems] = useState([]);
    
     // Function to handle form submission
     const handleSubmit = (event) => {
      event.preventDefault();
    
       // Create new item object
       const newUser = {
        itemname: userData.itemname,
        description: userData.description,
        productImage: userData.productImage,
        price: userData.price
     }
    
    
      // Add the new item to items array
      setAllItems([...allUsers, newUser]);
    
      // Clear the form fields
      setUserData({
        itemname: '',
        description: '',
        productImage: '',
        price: ''
      });
    
    
    }
    
    // Function to handle input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUserData({
          ...userData,
          [name]: value
      });
    };
    
    
      return (
        <>
         <div>
                <h2>User Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="itemName" 
                        placeholder="Item name" 
                        value={userData.itemname} 
                        onChange={handleChange} 
                    />
                    <textarea 
                        type="text" 
                        name="description" 
                        placeholder="Description" 
                        value={userData.description} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="file" 
                        name="Image" 
                        placeholder="Image" 
                        onChange={handleChange} 
                    />
                    <input 
                        type="number" 
                        name="price" 
                        placeholder="Price" 
                        value={userData.price} 
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </form>
                <h2>All Users</h2>
                <ul>
                    {allUsers.map((items, index) => (
                        <li key={index}>
                            item name: {items.productName}, description: {items.price}, image: {items.productImage} 
                        </li>
                    ))}
                </ul>
            </div>
        </>
      )
}
