import Navbar from './components/Navbar';
import SlickCarousel from './components/SlickCarousel';

function App() {
  return (
    <div>
      <SlickCarousel /> {/* SlickCarousel component */}
      <Navbar /> {/* Navbar component */}
      <div className="pt-16"> {/* Adiciona espaçamento para evitar sobreposição */}
        {/* Outros componentes ou conteúdo */}
      </div>
    </div>
  );
}

export default App;
