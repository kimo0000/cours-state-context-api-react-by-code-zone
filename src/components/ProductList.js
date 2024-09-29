import { useContext } from "react";
import { productsContext } from "../context/ProductProvider";

import { useRecoilState } from "recoil";
import { productsState } from "../recoil_context/recoil_data";

function ProductList() {

  //  const data = useContext(productsContext);

   const [products, setProducts] = useRecoilState(productsState);

  return (
    <>
      <div className="ProductList">
        ProductList :
        <ul className="ProductList">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
