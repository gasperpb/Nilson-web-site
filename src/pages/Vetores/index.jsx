import { useEffect, useState } from "react";
import "@google/model-viewer";

const Vetor = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Estado para controlar o cartão selecionado

  useEffect(() => {
    const modelViewers = document.querySelectorAll("model-viewer");
    const cards = document.querySelectorAll(".card");
    const defaultOrbit = "0deg 90deg 164m";

    const applyOrbit = (modelViewer, orbit, vert) => {
      modelViewer.setAttribute("camera-orbit", orbit);
      modelViewer.setAttribute("interpolation-decay", "200");
      modelViewer.setAttribute("camera-target", `0m ${vert}m 10m`);
    };

    cards.forEach((card, index) => {
      const modelViewer = modelViewers[index];
      if (modelViewer) {
        const calcOrbit = (xPos, cardRect) => {
          const normalizedX = (xPos - cardRect.left) / cardRect.width;
          const angle = normalizedX * 90 - 45;
          return `${-angle}deg 90deg 164m`;
        };

        card.addEventListener("mousemove", (event) => {
          const cardRect = card.getBoundingClientRect();
          const orbit = calcOrbit(event.clientX, cardRect);
          applyOrbit(modelViewer, orbit, 120);
        });

        card.addEventListener("mouseleave", () => {
          applyOrbit(modelViewer, defaultOrbit, 140);
        });

        modelViewer.addEventListener("load", () => {
          modelViewer.classList.add("loaded");
        });
      } else {
        console.log(`No model found for card at i:${index}`);
      }
    });
  }, []);

  const characters = [
    {
      name: "SpiderMan",
      description:
        "Vetor: A Força da Agilidade Experimente o poder de um herói ágil com o Vector Spider-Man , a camisa que combina design inovador e tecnologia de ponta. Inspirada nas combinações de lançamento de teias e reflexos rápidos do Homem-Aranha, esta peça oferece movimentos fluidos e conforto excepcional. Perfeita para quem busca superar desafios com estilo e precisão.",
    },
    {
      name: "Mantis",
      description:
        "Vetor: O Toque Empático Sinta a conexão emocional com o Vector Mantis , uma camisa que equilibra delicadeza e força. Inspirada na empatia e no poder de cura de Mantis, esta peça é ideal para quem deseja transmitir calma e confiança. Com tecidos premium e acabamentos refinados, o Vector Mantis é mais do que uma roupa – é uma declaração de harmonia..",
    },
    {
      name: "Bruce",
      description:
        "Vetor: A Explosão de Inteligência Domine o equilíbrio entre mente e força com o Vector Bruce Banner , a camisa que reflete inteligência estratégica e poder incontrolável. Inspirada no Dr. Bruce Banner, esta peça combina elegância minimalista com durabilidade extrema. Projetada para líderes visionários que buscam impactar o mundo com sua presença marcante..",
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index); // Alterna entre selecionar e deselecionar
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-400 overflow-hidden">
      {characters.map((character, index) => (
        <div
          key={index}
          className={`relative m-4 w-[230px] h-[324px] cursor-pointer group ${
            selectedCard === index ? "hidden" : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          {/* Card Background */}
          <div
            className={`absolute inset-0 bg-[${index === 0 ? "#c63e3c" : index === 1 ? "#789d40" : "#7e448f"}] transform skew-y-[-8deg] shadow-lg transition-all duration-200 group-hover:skew-y-[-16deg]`}
          ></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end items-center p-4 text-white">
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <p className="text-sm font-medium mb-4">{character.description}</p>
          </div>
          {/* Model Viewer */}
          <div className="absolute inset-0 flex justify-center items-center">
            <model-viewer
              src={`/models/${character.name.toLowerCase()}.glb`}
              alt={character.name}
              ar
              camera-controls
              auto-rotate
              shadow-intensity="1"
              className="w-[500px] h-[500px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></model-viewer>
          </div>
        </div>
      ))}

      {/* Exibição do Modelo Ampliado */}
      {selectedCard !== null && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50"
          onClick={() => setSelectedCard(null)} // Fecha o zoom ao clicar fora
        >
          <model-viewer
            src={`/models/${characters[selectedCard].name.toLowerCase()}.glb`}
            alt={characters[selectedCard].name}
            ar
            camera-controls
            auto-rotate
            shadow-intensity="1"
            className="w-[80vw] h-[80vh]"
          ></model-viewer>
        </div>
      )}
    </div>
  );
};

export default Vetor;