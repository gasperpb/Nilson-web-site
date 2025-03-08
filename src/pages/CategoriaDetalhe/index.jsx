import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoriaDetalhe = () => {
  const { categoria } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Formatar o nome da categoria para exibição (converter de kebab-case para título)
  const formatarNomeCategoria = (str) => {
    return str
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    // Simulação de carregamento de produtos da categoria
    // Em uma aplicação real, isso seria uma chamada de API
    setLoading(true);
    
    // Simular um atraso de carregamento
    setTimeout(() => {
      // Gerar alguns produtos fictícios baseados na categoria
      const produtosSimulados = Array(8)
        .fill(null)
        .map((_, index) => ({
          id: `${categoria}-${index + 1}`,
          nome: `Camisa ${formatarNomeCategoria(categoria)} - Modelo ${index + 1}`,
          preco: (Math.random() * 50 + 29.9).toFixed(2),
          descontoPreco: (Math.random() * 45 + 25).toFixed(2),
          desconto: "5% no PIX",
          imagem: `https://via.placeholder.com/300x400?text=${categoria.replace(/-/g, "+")}+${index + 1}`,
        }));

      setProdutos(produtosSimulados);
      setLoading(false);
    }, 800);
  }, [categoria]);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Categoria: {formatarNomeCategoria(categoria)}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Encontre os melhores vetores para camisas de {formatarNomeCategoria(categoria)}
        </p>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <div 
                key={produto.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-sm">
                    {produto.desconto}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 h-14 overflow-hidden">
                    {produto.nome}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 line-through">R$ {produto.preco}</p>
                      <p className="text-xl font-bold text-red-600">R$ {produto.descontoPreco}</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Seção de informações adicionais */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sobre Vetores de {formatarNomeCategoria(categoria)}
          </h2>
          <p className="text-gray-700 mb-4">
            Nossos vetores de {formatarNomeCategoria(categoria)} são desenvolvidos por designers especializados, 
            garantindo alta qualidade e originalidade para suas camisas personalizadas. Todos os arquivos estão 
            disponíveis em formatos compatíveis com os principais softwares de edição.
          </p>
          <p className="text-gray-700">
            Caso não encontre o modelo ideal para seu projeto, entre em contato conosco para solicitar 
            um vetor personalizado de {formatarNomeCategoria(categoria)}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriaDetalhe;