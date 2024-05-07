import './App.css';
import React from 'react';
import Header from './Header';
import Adverts from './Adverts';
//import Products from './Products';
//import { products, ProductList } from "./Products";
import Products from './Products';
import EggCooker from './assets/EggCooker.png';
import Dell from './assets/Dell.png';
import Phillips from './assets/Phillips.png';
import FaceCleanser from './assets/FaceCleanser.png';



const productData = [
  { name: 'Egg Cooker', 
  description: 'Effortlessly prepare perfect eggs every time with our Egg Cooker. Enjoy hassle-free cooking and consistent results in minutes.', 
  image: EggCooker, 
price: 'R349.99'},
  { name: 'Dell Laptop', 
  description: 'The Dell Laptop: Your sleek, powerful companion for work and play.',
   image: Dell, 
   price: 'R5999.00' },
  { name: 'Phillips Ultra-Wide', 
  description: 'Experience vivid visuals and enhanced productivity in a sleek design.', 
  image: Phillips , 
  price: 'R34999.99'},
  { name: 'Face Cleanser', 
  description: 'Our gentle Face Cleanser revitalizes skin, leaving it clean and refreshed.', 
  image: FaceCleanser , 
  price: 'R249.99'},
];



function App() {
  return (
    <div>
      <Header/>
      <Adverts/>
      <div style ={{marginLeft: '250px', marginRight: '250px'}}>

      <h1>Hot Picks</h1>
      <Products products={productData} />
      </div>

    
    
 
    </div>
  );
}

export default App;

