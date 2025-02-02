## Simple E-Commerce Cart

A simple e-commerce cart application built with React. This project allows users to browse products, add them to a cart, update quantities, and remove items. It also includes a cart summary that displays the total price.

## Features
Product List: Displays a list of products with their names and prices.

Add to Cart: Users can add products to the cart. If a product is already in the cart, its quantity is incremented.

Update Quantity: Users can adjust the quantity of items in the cart.

Remove from Cart: Users can remove items from the cart.

Cart Summary: Displays the total number of items and the total price of the cart.


## Technologies Used
React: A JavaScript library for building user interfaces.

CSS: Styling for the application.

JavaScript: Logic for managing the cart and product data.

## Installation
Follow these steps to set up the project locally
git clone https://github.com/your-username/simple-ecommerce-cart.git
cd simple-ecommerce-cart
Install dependencies:

bash

npm install
Run the application:

bash

npm start
Open the application:

Visit http://localhost:3000 in your browser to view the application.

Project Structure
Copy
simple-ecommerce-cart/
├── src/
│   ├── components/
│   │   ├── ProductList.js
│   │   ├── Cart.js
│   │   ├── CartSummary.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── public/
│   ├── index.html
├── package.json
├── README.md
## Components
App.js
The main component that manages the state of the cart and products.

Contains functions for adding, removing, and updating items in the cart.

ProductList.js
Displays a list of products.

Each product has an "Add to Cart" button that triggers the addToCart function.

Cart.js
Displays the items in the cart.

Allows users to update the quantity of items or remove them from the cart.

CartSummary.js
Displays the total number of items and the total price of the cart.

Code Example
Adding a Product to the Cart
jsx
Copy
const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find(item => item.id === product.id);
    if (existingProduct) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};
Removing a Product from the Cart
jsx
Copy
const removeFromCart = (productId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
};
Updating the Quantity of a Product
jsx
Copy
const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) return;  // Prevent reducing quantity below 1
  setCart(prevCart => prevCart.map(item =>
    item.id === productId ? { ...item, quantity: newQuantity } : item
  ));
};
## Styling
The application is styled using CSS. The index.css file contains styles for the product list, cart, and cart summary.

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

