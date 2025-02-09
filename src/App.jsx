
import Navbar from './components/navbar';
import SlickCarousel from './components/SlickCarousel';
import ImageCarousel from './components/ImageCarousel';
import FloatingIcon from './components/FloatingIcon';
import Vetor from './components/Vetores';
import ContactForm from './components/Contact';
import About from './components/about';
//import Footer from './components/footer';
import LinksFooter from './components/Linkfooter';
import ProductCarousel from './components/Produtos';

function App() {
  return (
    <div>
      <SlickCarousel /> {/* SlickCarousel component */}
      <Navbar /> {/* Navbar component */}
      <div className="pt-32"> {/* Adiciona espaçamento para evitar sobreposição */}
        <ImageCarousel /> {/* ImageCarousel component */}
        <ProductCarousel /> {/* ProductCarousel component */}
        <FloatingIcon />
        <Vetor /> {/* Vetor component */} 
        <ContactForm /> {/* ContactForm component */}
        <About/> {/* About component */}        
        <LinksFooter /> {/* LinksFooter component */}
        <div className="pt-16"></div>
        
      </div>
    </div>
  );
}

export default App;