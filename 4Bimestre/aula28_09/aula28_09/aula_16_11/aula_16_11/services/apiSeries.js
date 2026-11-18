// services/apiSeries.js

export async function buscarSerie(titulo) {
  const termo = titulo.trim();

  if (!termo) {
    throw new Error('Digite o nome de uma série ou programa para buscar.');
  }

  // Endpoint oficial da TVMaze API (gratuito e sem API Key)
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(termo)}`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    if (resposta.status === 404) {
      throw new Error('Série não encontrada. Verifique a ortografia e tente novamente.');
    }
    throw new Error('Falha ao conectar com o servidor da TVMaze.');
  }

  const dados = await resposta.json();

  // Remove tags HTML (<p>, <b>, <i>) que a API envia dentro do campo summary
  const sinopseLimpa = dados.summary
    ? dados.summary.replace(/<[^>]*>?/gm, '')
    : 'Sinopse não disponível para este título.';

  return {
    nome: dados.name,
    nota: dados.rating?.average ? `${dados.rating.average} / 10` : 'Sem nota',
    generos: dados.genres?.length > 0 ? dados.genres.join(', ') : 'Não informado',
    status: dados.status === 'Ended' ? 'Finalizada' : 'Em exibição',
    estreia: dados.premiered || 'Data desconhecida',
    poster: dados.image?.medium || null,
    sinopse: sinopseLimpa,
  };
}