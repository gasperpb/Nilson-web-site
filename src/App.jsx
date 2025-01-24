
import Navbar from './components/Navbar';
import SlickCarousel from './components/SlickCarousel';
import ImageCarousel from './components/ImageCarousel';
import FloatingIcon from './components/FloatingIcon';

function App() {
  return (
    <div>
      <SlickCarousel /> {/* SlickCarousel component */}
      <Navbar /> {/* Navbar component */}
      <div className="pt-32"> {/* Adiciona espaçamento para evitar sobreposição */}
        <ImageCarousel /> {/* ImageCarousel component */}
        <FloatingIcon />
      <div className="pt-16"></div>
        
      </div>
    </div>
  );
}

export default App;