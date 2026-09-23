import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImagineSection from './components/ImagineSection';
import OrangeBenefit from './components/OrangeBenefit';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OrangeBenefit />
      <ImagineSection/>
      <ProductsSection />
      <Footer />
    </>
  );
}

export default App;
