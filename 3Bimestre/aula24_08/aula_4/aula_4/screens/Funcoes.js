export function calcularIdade(nome, anoNascimento, setResultado) {

  const anoAtual = new Date().getFullYear();
  const ano = Number(anoNascimento);

  if (nome === '' || anoNascimento === '') {
    setResultado('Preencha todos os campos!');
    return;
  }

  if (ano <= 0 || ano > anoAtual) {
    setResultado('Digite um ano de nascimento válido!');
    return;
  }

  const idade = anoAtual - ano;

  setResultado(
    `Olá, ${nome}! Você tem aproximadamente ${idade} anos.`
  );
}