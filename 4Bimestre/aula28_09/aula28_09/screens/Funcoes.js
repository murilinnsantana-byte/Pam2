export const obterListaItens = () => {
  return [
    {
      id: '1',
      categoria: 'Navegação',
      titulo: 'NavigationContainer & Stack Navigator',
      descricao: 'Gerencia o histórico de telas e transições de pilha no React Native, permitindo ir da tela de Login para a Home usando navigation.replace() ou navigation.navigate().',
    },
    {
      id: '2',
      categoria: 'Componente de Lista',
      titulo: 'FlatList & renderItem',
      descricao: 'Componente performático para renderizar coleções de dados dinâmicos. Utiliza a propriedade keyExtractor para otimizar a renderização de cada item.',
    },
    {
      id: '3',
      categoria: 'Gerenciamento de Estado',
      titulo: 'React useState Hook',
      descricao: 'Hook do React utilizado para capturar e controlar o estado dos campos de entrada (TextInput) de Usuário e Senha na tela de Login.',
    },
    {
      id: '4',
      categoria: 'Modularização',
      titulo: 'Separação em Módulos (Funcoes & Estilos)',
      descricao: 'Isolamento da regra de negócio e funções auxiliares em Funcoes.js e dos estilos visuais em arquivos Estilo.js dedicados, mantendo o código limpo e organizado.',
    },
  ];
};

export const autenticarUsuario = (usuario, senha) => {
  if (usuario.trim() !== '' && senha.trim() !== '') {
    return true;
  }
  return false;
};