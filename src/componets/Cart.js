import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Cart() {

  const [cart, setCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0)


  const cartItems = () => {
    const userId = localStorage.getItem('userId')
    axios.get(`http://localhost:3000/users/cart/${userId}`)
      .then(res => {
        console.log("Cart Items", res.data)
        console.log("loooop", res.data.allCart.cartItems);
        setCart(res.data.allCart.cartItems)
        setGrandTotal(res.data.grandTotal)

      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    cartItems();
  }, []);


  return (
    <div className='container mt-5'>

      <table className="table border">
        <thead className="table-dark">
          <tr>
            <th>Order Number</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>(removeItem(item._id))} className='btn btn-sm btn-outline-danger'>remove</button></td>
            </tr>

          ))}

        </tbody>
      </table>

    </div>
  );
}

export default Cart;
