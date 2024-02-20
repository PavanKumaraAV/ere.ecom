import axios from 'axios';
import React, { useEffect, useState } from 'react';



function ProductList() {

  const [products, setProducts] = useState([]); // array of products returned by the server

  const getProducts = () => {

    axios.get("http://localhost:3000/products").then((res) => {

      console.log(res.data.products)
      setProducts(res.data.products);

    }).catch((err) => {
      alert("No products found")

    })

  }

  const addToCart = (userId, id) => {
    const quantity = 1;
    axios.put(`http://localhost:3000/cart/add/${userId}`, {
      id,
      quantity
    }).then((res) => {
      console.log(res)
      alert("Product added to your cart")
    }).catch((error) => {
      alert("Error adding product to cart");
    })
  }

  const gotoCart = () => {
    window.location.href = "/cart";
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className='d-flex flex-row w-100'>
        {products.map((item) => (
          <div className="row row-cols-1 row-cols-md-1 mb-3 text-center m-5 w-75" key={item._id}>

            <div className="col" >
              <div className="card mb-4 rounded-3 shadow-sm" >
                <div className="card-header py-3 bg-success">
                  <h4 className="my-0 fw-normal text-light">{item.name}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">${item.price}</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{item.description}</li>

                  </ul>
                  <button type="button" onClick={() => { addToCart(localStorage.getItem('userId'), item._id) }} className="w-50 btn btn-lg btn-outline-success">Add To Cart</button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
      <div className='w-100 text-center'>
        <button onClick={() => { gotoCart() }} type="submit" className="btn btn-success">Go To Cart</button>
      </div>

    </>
  );
}

export default ProductList;
