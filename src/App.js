import './App.css';
import Navbar from './components/Navbar';
import { Carousel } from './components/Carousel';
import {Main} from './components/Main';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
   
    <Navbar/>
    
    <Carousel/>
    <Main heading='LATEST PRODUCTS'/>

    <Footer/>
  
    
    </>

  );
}

export default App;
