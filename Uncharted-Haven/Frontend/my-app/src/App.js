import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'; // assuming this is the home page component
import ShopCatagory from './Pages/ShopCatagory'
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCatagory />} />
        <Route path="/womans" element={<ShopCatagory />} />
        <Route path="/kids" element={<ShopCatagory />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:productID' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;