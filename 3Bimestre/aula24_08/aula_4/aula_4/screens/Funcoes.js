export function verificarQuiz() {

    const respostasCorretas = {
        pergunta1: "b",
        pergunta2: "c",
        pergunta3: "b",
        pergunta4: "a",
        pergunta5: "a",
        pergunta6: "c",
        pergunta7: "a",
        pergunta8: "b",
        pergunta9: "a",
        pergunta10: "a"
    };

    let pontos = 0;

    const totalPerguntas = Object.keys(respostasCorretas).length;

    for (let pergunta in respostasCorretas) {

        const respostaSelecionada = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (respostaSelecionada) {

            if (respostaSelecionada.value === respostasCorretas[pergunta]) {
                pontos++;
            }
        }
    }

    const resultado = document.getElementById("resultado");

    let mensagem = "";

    if (pontos === 10) {
        mensagem = "🏆 Você é um mestre do basquete!";
    } 
    else if (pontos >= 7) {
        mensagem = "🔥 Mandou muito bem!";
    } 
    else if (pontos >= 5) {
        mensagem = "👏 Bom trabalho!";
    } 
    else {
        mensagem = "🏀 Continue treinando seus conhecimentos!";
    }

    resultado.innerHTML = `
        <h2>Resultado</h2>

        <p>Você acertou <strong>${pontos}</strong> de <strong>${totalPerguntas}</strong> perguntas.</p>

        <p>${mensagem}</p>

        <button onclick="location.reload()">
            Jogar novamente
        </button>
    `;
}
