import Navbar from './pages/navbar';
import SlickCarousel from './pages/SlickCarousel';
import ImageCarousel from './pages/ImageCarousel';
import FloatingIcon from './pages/FloatingIcon';
import Vetor from './pages/Vetores';
import ContactForm from './pages/Contact';
import About from './pages/about';
//import Footer from './pages/footer';
import LinksFooter from './pages/Linkfooter';
import ProductCarousel from './pages/Produtos';
// Se estiver usando react-router-dom v6+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Se estiver usando react-router-dom v5 ou anterior
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoriaDetalhe from './pages/CategoriaDetalhe';
import Servicos from './pages/Servicos';
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
                <Servicos />
                <About/> {/* About component */}
              </>
            } />
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