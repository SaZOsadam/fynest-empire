import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyNav from './components/StickyNav';
import FloatingWA from './components/FloatingWA';
import QuoteTicker from './components/QuoteTicker';
import './App.css';

function App() {
  return (
    <div className="app">
      <StickyNav />
      <Hero />
      <QuoteTicker />
      <Products />
      <About />
      <CTA />
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
