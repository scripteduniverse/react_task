import React from 'react';
import Goods from './Goods';
import Cart from './Cart';
import { CartProvider } from './contexts/CartContext';
import { GoodsProvider } from './contexts/GoodsContext';
import { RateProvider } from './contexts/RateContext';


function App() {

  return (
    <RateProvider>
      <GoodsProvider>
        <CartProvider>
          <main className = 'main-container'>
            <Goods />
            <Cart />
          </main>
        </CartProvider>
      </GoodsProvider>
    </RateProvider>
  );
}

export default App;
