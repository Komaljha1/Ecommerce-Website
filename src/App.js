import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Product from './components/Product/ProductDetails';
// import Star from './components/Star';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Product/:id" element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
