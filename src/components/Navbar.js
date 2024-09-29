import { useContext } from "react";
import { productsContext } from "../context/ProductProvider";

import {useRecoilState} from 'recoil';
import {productsState}  from "../recoil_context/recoil_data";

function Navbar() {

    // const data = useContext(productsContext);

    const [products, setProducts] = useRecoilState(productsState);

    return (
      <>
        <div className="navbar">
          <h3>All Product Length is : {products.length}</h3>
        </div>
      </>
    );
}

export default Navbar;
