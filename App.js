import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CreateProduct from './CreateProduct'; // Importando o novo componente
import './App.css'; // Importando estilos

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create" element={<CreateProduct />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
