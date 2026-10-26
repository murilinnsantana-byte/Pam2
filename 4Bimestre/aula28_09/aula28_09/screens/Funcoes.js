// Dados mocados (mock data) para a FlatList sem banco de dados
export const dadosProdutos = [
  { id: '1', nome: 'SNEAKERS RUNNER', categoria: 'Calçados', preco: 'R$ 299,90' },
  { id: '2', nome: 'JAQUETA CASUAL', categoria: 'Roupas', preco: 'R$ 189,00' },
  { id: '3', nome: 'MOCHILA SPORT', categoria: 'Acessórios', preco: 'R$ 120,50' },
  { id: '4', nome: 'BONÉ STREETWEAR', categoria: 'Acessórios', preco: 'R$ 79,90' },
  { id: '5', nome: 'CALÇA JOGGER', categoria: 'Roupas', preco: 'R$ 149,90' },
];

// Função 1: Validação simples de login
export const validarLogin = (usuario, senha) => {
  if (!usuario || !senha) {
    return { valido: false, mensagem: 'Preencha todos os campos!' };
  }
  if (senha.length < 4) {
    return { valido: false, mensagem: 'A senha deve ter pelo menos 4 caracteres!' };
  }
  return { valido: true, mensagem: 'Login realizado com sucesso!' };
};

// Função 2: Formatação ou alerta de item selecionado na FlatList
export const exibirAlertaItem = (item) => {
  alert(`Você selecionou: ${item.nome}\nPreço: ${item.preco}`);
};