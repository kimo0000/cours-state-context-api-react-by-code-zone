import {useState, createContext } from 'react';


function ProductProvider(props) {
  
  const [products, setProducts] = useState([
    { id: 1, title: "item 1" },
    { id: 2, title: "item 2" },
    { id: 3, title: "item 3" }
  ]);
  
  return ( 
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
    )
  }
  
  export default ProductProvider;
  export const productsContext = createContext();