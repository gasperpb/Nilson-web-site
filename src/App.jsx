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
// Se estiver usando react-router-dom v6+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Se estiver usando react-router-dom v5 ou anterior
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categorias from './pages/categorias';
import CategoriaDetalhe from './pages/CategoriaDetalhe';
// Importe outros componentes de página

function App() {
  return (
    <Router>
      <div>
        <SlickCarousel /> {/* SlickCarousel component */}
        <Navbar /> {/* Navbar component */}
        <div className="pt-32"> {/* Adiciona espaçamento para evitar sobreposição */}
          <Routes>
            <Route path="/" element={
              <>
                <ImageCarousel /> {/* ImageCarousel component */}
                <ProductCarousel /> {/* ProductCarousel component */}
                <FloatingIcon />
                <Vetor /> {/* Vetor component */} 
                <ContactForm /> {/* ContactForm component */}
                <About/> {/* About component */}
              </>
            } />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/:categoria" element={<CategoriaDetalhe />} />
            {/* Adicione outras rotas conforme necessário */}
            <Route path="/sobre" element={<About />} />
            {/* ... outras rotas ... */}
          </Routes>
          <LinksFooter /> {/* LinksFooter component */}
          <div className="pt-16"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;