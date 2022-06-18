import React from 'react';
import {products} from './data';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <h1>Ты сегодня покормил кота?</h1>
        <ul className="product-list">
          {products.length > 0 && 
          products.map(item => <ProductCard key={item.id} product={item}/>)}
        </ul>
      </main>
    </div>

    
  )
}

export default App;
