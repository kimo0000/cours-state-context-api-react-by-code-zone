import './App.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Card from './components/Card';
import ProductProvider from "./context/ProductProvider";


function App() {
  
  return (
    <div className="App">
      Hello React
      {/* <ProductProvider> */}
        <Navbar />
        <Card>
          <Card.Title />
        </Card>
        <ProductList />
      {/* </ProductProvider> */}
    </div>
  );
}

export default App;
