

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-400 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Sobre Nossa Empresa
        </h1>

        {/* Descrição Geral */}
        <p className="text-lg text-center text-white mb-12">
          Há mais de duas décadas, somos referência na criação de vetores e roupas nordestinas, combinando tradição cultural com inovação e design moderno. Nosso compromisso é oferecer peças de alta qualidade que celebram a rica herança do Nordeste brasileiro.
        </p>

        {/* Seção de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Diferencial 1: Experiência */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experiência</h2>
            <p className="text-gray-700">
              Com mais de 20 anos no mercado, dominamos a arte de criar roupas que unem conforto, estilo e autenticidade.
            </p>
          </div>

          {/* Diferencial 2: Qualidade */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualidade</h2>
            <p className="text-gray-700">
              Utilizamos os melhores materiais e técnicas de produção para garantir durabilidade e acabamento impecável em cada peça.
            </p>
          </div>

          {/* Diferencial 3: Cultura Nordestina */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cultura Nordestina</h2>
            <p className="text-gray-700">
              Cada vetor e roupa é inspirado nas cores, estampas e histórias do Nordeste, preservando sua essência e beleza.
            </p>
          </div>
        </div>

        {/* Chamada Final */}
        <div className="mt-12 text-center">
          <p className="text-lg text-white font-medium">
            Descubra a autenticidade das nossas peças e leve um pedaço do Nordeste com você!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;