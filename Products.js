import React from 'react'; 
 
const products = [ 
    { id: 1, name: "Laptop", price: "₹50,000" }, 
    { id: 2, name: "Smartphone", price: "₹20,000" }, 
    { id: 3, name: "Headphones", price: "₹3,000" } 
]; 
 
function Products() { 
    return ( 
        <div> 
            <h2>Our Products</h2> 
            <ul> 
                {products.map((product) => ( 
                    <li key={product.id}> 
                        <strong>{product.name}</strong> - {product.price} 
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 
 
export default Products; 
