import React, { createContext, useEffect, useState } from 'react';
import App from './App';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  function getData(id) {
    return data.find((product) => (product.id == id));
  }

  useEffect(() => {
    fetch("http://173.0.0.247:8112/ecommerce/GetProducts.php", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(Response => Response.json())
      .then(Response => setData(Response))
      .catch(error => alert(error))
  })

  function addItemToCart(id) {
    const product = getData(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if (!item) {
        return [...prevItems, {
          id,
          qty: 1,
          product,
          totalPrice: product.Price
        }];
      }
      else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice = parseInt(item.totalPrice) + parseInt(product.Price);
          }
          return item;
        });
      }
    });

  }

  function getItemsCount() {
    return items.reduce((total, item) => (total + item.qty), 0);
  }

  function getTotalPrice() {
    return items.reduce((total, item) => (parseInt(total) + parseInt(item.totalPrice)), 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
}

