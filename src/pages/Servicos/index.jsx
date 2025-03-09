

export function Servicos() {
  const servicos = [
    {
      id: 1,
      titulo: "Plataforma de Arquivos",
      descricao: "Acesso a milhares de arquivos prontos para personalização de camisas e outros produtos.",
      recursos: [
        "Biblioteca com mais de 10.000 vetores categorizados",
        "Download imediato após a compra",
        "Formatos compatíveis com principais softwares de edição",
        "Atualizações semanais com novos conteúdos",
        "Sistema de busca avançada por tema ou categoria"
      ],
      imagem: "/public/img/p (1).jpg",
    },
    {
      id: 2,
      titulo: "Artes para Camisas",
      descricao: "Designs exclusivos para personalização de camisas, desenvolvidos por designers profissionais.",
      recursos: [
        "Artes vetorizadas em alta resolução",
        "Opções para todos os públicos e segmentos",
        "Compatível com qualquer método de impressão",
        "Personalização sob demanda",
        "Designs exclusivos para diferentes nichos"
      ],
      imagem: "/public/img/p (2).jpg",
    },
    {
      id: 3,
      titulo: "Sublimação",
      descricao: "Arquivos otimizados para o processo de sublimação, garantindo cores vibrantes e detalhes nítidos.",
      recursos: [
        "Perfis de cores CMYK otimizados para sublimação",
        "Templates para diferentes modelos de camisas",
        "Guia de aplicação com dicas para resultados profissionais",
        "Arquivos em alta resolução para definição máxima",
        "Compatível com todos os tipos de impressoras de sublimação"
      ],
      imagem: "/public/img/p (1).jpg",
    },
    {
      id: 4,
      titulo: "Serigrafia",
      descricao: "Arquivos separados por cores, prontos para o processo de serigrafia tradicional ou digital.",
      recursos: [
        "Arquivos com separação de cores",
        "Opções com traços otimizados para telas",
        "Indicação de tipos de malha e tintas recomendadas",
        "Designs adaptados para múltiplas cores",
        "Guia de aplicação para diferentes tecidos"
      ],
      imagem: "/public/img/p (1).jpg",
    },
    {
      id: 5,
      titulo: "DTG (Direct to Garment)",
      descricao: "Arquivos preparados para impressão digital direta em tecidos, com cores vivas e detalhes precisos.",
      recursos: [
        "Arquivos com resolução ideal para DTG",
        "Perfis de cores RGB otimizados para impressão digital",
        "Compatível com todas as marcas de impressoras DTG",
        "Designs testados para durabilidade após lavagens",
        "Suporte técnico para configurações de impressão"
      ],
      imagem: "/public/img/p.jpg",
    },
    {
      id: 6,
      titulo: "DTF (Direct to Film)",
      descricao: "Arquivos adaptados para o moderno processo DTF, permitindo transferência em diversos materiais.",
      recursos: [
        "Arquivos otimizados para impressão em filme",
        "Suporte para impressão com tinta branca",
        "Compatível com diferentes marcas de impressoras DTF",
        "Designs testados em diversos tipos de tecido",
        "Guia passo a passo para aplicação perfeita"
      ],
      imagem: "/public/img/p (1).jpg",
    },
    {
      id: 7,
      titulo: "Insumos DTF Importados",
      descricao: "Fornecemos insumos de alta qualidade para impressão DTF, todos importados diretamente.",
      recursos: [
        "Poliamida em pó de alto rendimento",
        "Film DTF de qualidade premium",
        "Tintas DTF importadas com excelente fixação",
        "Produtos testados e aprovados",
        "Garantia de qualidade em todos os insumos"
      ],
      imagem: "/public/img/p (1).jpg",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Nossos Serviços</h1>
        
        {/* Destaque Persona */}
        <div className="mb-12 bg-gradient-to-r from-black via-red-900 to-red-700 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Serviços Persona</h2>
          <p className="text-lg">
            Na Persona, oferecemos serviços de impressão DTF e insumos de alta qualidade, 
            como poliamida em pó, film e tintas DTF, todos importados diretamente. 
            Garantimos excelência e suporte técnico, atendendo às demandas do mercado 
            com inovação e precisão. Conte conosco para elevar a qualidade do seu negócio.
          </p>
        </div>
        
        <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          Oferecemos soluções completas para personalização de camisas e produtos, desde arquivos vetoriais até suporte para diferentes métodos de impressão.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div 
              key={servico.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200"
            >
              <div className="h-48 bg-red-600 overflow-hidden">
                <img 
                  src={servico.imagem || `https://via.placeholder.com/400x200?text=${servico.titulo}`} 
                  alt={servico.titulo} 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-800">{servico.titulo}</h3>
                <p className="text-gray-700 mb-4">{servico.descricao}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Recursos:</h4>
                <ul className="space-y-2 mb-6">
                  {servico.recursos.map((recurso, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{recurso}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white py-3 px-4 rounded-md font-medium transition duration-300 hover:from-red-800 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Seção de CTA */}
        <div className="mt-16 bg-gradient-to-r from-black via-red-900 to-red-700 rounded-lg shadow-xl p-8 text-white">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Precisa de um serviço personalizado?</h2>
              <p className="text-lg mb-6 md:mb-0 text-gray-100">
                Entre em contato conosco para solicitar orçamentos de artes personalizadas, 
                treinamentos específicos ou pacotes especiais para sua empresa.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <button className="bg-white text-red-800 hover:bg-gray-100 py-3 px-8 rounded-md font-bold text-lg transition duration-300 transform hover:scale-105">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
        
        {/* Seção de FAQs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Perguntas Frequentes</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Quais formatos de arquivo são fornecidos?</h3>
              <p className="text-gray-700">
                Fornecemos arquivos em diversos formatos como AI, EPS, PDF, SVG, PNG e CDR, garantindo compatibilidade 
                com todos os principais softwares de design gráfico e edição de imagem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Posso solicitar alterações nos arquivos?</h3>
              <p className="text-gray-700">
                Sim! Oferecemos serviço de personalização para adaptar qualquer arquivo às suas necessidades específicas. 
                Entre em contato com nossa equipe para solicitar orçamentos de personalização.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Os arquivos têm licença para uso comercial?</h3>
              <p className="text-gray-700">
                Todos os arquivos disponíveis em nossa plataforma possuem licença para uso comercial, permitindo que você 
                utilize em seus produtos para venda sem preocupações com direitos autorais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Qual a qualidade dos insumos DTF importados?</h3>
              <p className="text-gray-700">
                Nossos insumos DTF são importados diretamente dos melhores fabricantes, passando por rigoroso controle de qualidade.
                Garantimos produtos de alta performance e durabilidade, com suporte técnico especializado para seu uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
