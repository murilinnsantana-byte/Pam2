import { verificarQuiz } from "./Funcoes.js";
import "./Estilo.js";

export function Home() {
   
   document.body.style.overflowY = "auto";
   document.body.insertAdjacentHTML("beforeend", `
   document.body.style.overflowY = "auto";
        
  <div class="container">
            <div class="quiz">
                <h1>🏀 Quiz de Basquete</h1>

                <p class="descricao">
                    Teste seus conhecimentos sobre basquete!
                </p>

                <form id="quizForm">

                    <!-- PERGUNTA 1 -->
                    <div class="pergunta">
                        <h2>1. Quantos jogadores de cada equipe ficam em quadra no basquete?</h2>

                        <label>
                            <input type="radio" name="pergunta1" value="a">
                            4 jogadores
                        </label>

                        <label>
                            <input type="radio" name="pergunta1" value="b">
                            5 jogadores
                        </label>

                        <label>
                            <input type="radio" name="pergunta1" value="c">
                            6 jogadores
                        </label>

                        <label>
                            <input type="radio" name="pergunta1" value="d">
                            7 jogadores
                        </label>
                    </div>


                    <!-- PERGUNTA 2 -->
                    <div class="pergunta">
                        <h2>2. Quantos pontos vale uma cesta de fora da linha de três?</h2>

                        <label>
                            <input type="radio" name="pergunta2" value="a">
                            1 ponto
                        </label>

                        <label>
                            <input type="radio" name="pergunta2" value="b">
                            2 pontos
                        </label>

                        <label>
                            <input type="radio" name="pergunta2" value="c">
                            3 pontos
                        </label>

                        <label>
                            <input type="radio" name="pergunta2" value="d">
                            4 pontos
                        </label>
                    </div>


                    <!-- PERGUNTA 3 -->
                    <div class="pergunta">
                        <h2>3. Qual jogador é conhecido como "King James"?</h2>

                        <label>
                            <input type="radio" name="pergunta3" value="a">
                            Michael Jordan
                        </label>

                        <label>
                            <input type="radio" name="pergunta3" value="b">
                            LeBron James
                        </label>

                        <label>
                            <input type="radio" name="pergunta3" value="c">
                            Stephen Curry
                        </label>

                        <label>
                            <input type="radio" name="pergunta3" value="d">
                            Kobe Bryant
                        </label>
                    </div>


                    <!-- PERGUNTA 4 -->
                    <div class="pergunta">
                        <h2>4. Qual jogador ficou famoso por usar a camisa número 23 no Chicago Bulls?</h2>

                        <label>
                            <input type="radio" name="pergunta4" value="a">
                            Michael Jordan
                        </label>

                        <label>
                            <input type="radio" name="pergunta4" value="b">
                            Shaquille O'Neal
                        </label>

                        <label>
                            <input type="radio" name="pergunta4" value="c">
                            Magic Johnson
                        </label>

                        <label>
                            <input type="radio" name="pergunta4" value="d">
                            Kevin Durant
                        </label>
                    </div>


                    <!-- PERGUNTA 5 -->
                    <div class="pergunta">
                        <h2>5. Quantos pontos vale um lance livre?</h2>

                        <label>
                            <input type="radio" name="pergunta5" value="a">
                            1 ponto
                        </label>

                        <label>
                            <input type="radio" name="pergunta5" value="b">
                            2 pontos
                        </label>

                        <label>
                            <input type="radio" name="pergunta5" value="c">
                            3 pontos
                        </label>

                        <label>
                            <input type="radio" name="pergunta5" value="d">
                            4 pontos
                        </label>
                    </div>


                    <!-- PERGUNTA 6 -->
                    <div class="pergunta">
                        <h2>6. Qual é o nome da principal liga profissional de basquete dos Estados Unidos?</h2>

                        <label>
                            <input type="radio" name="pergunta6" value="a">
                            NFL
                        </label>

                        <label>
                            <input type="radio" name="pergunta6" value="b">
                            MLB
                        </label>

                        <label>
                            <input type="radio" name="pergunta6" value="c">
                            NBA
                        </label>

                        <label>
                            <input type="radio" name="pergunta6" value="d">
                            NHL
                        </label>
                    </div>


                    <!-- PERGUNTA 7 -->
                    <div class="pergunta">
                        <h2>7. Qual jogador é famoso por seus arremessos de três pontos e por jogar no Golden State Warriors?</h2>

                        <label>
                            <input type="radio" name="pergunta7" value="a">
                            Stephen Curry
                        </label>

                        <label>
                            <input type="radio" name="pergunta7" value="b">
                            Giannis Antetokounmpo
                        </label>

                        <label>
                            <input type="radio" name="pergunta7" value="c">
                            Nikola Jokić
                        </label>

                        <label>
                            <input type="radio" name="pergunta7" value="d">
                            Luka Dončić
                        </label>
                    </div>


                    <!-- PERGUNTA 8 -->
                    <div class="pergunta">
                        <h2>8. O que significa fazer um "triple-double"?</h2>

                        <label>
                            <input type="radio" name="pergunta8" value="a">
                            Fazer três cestas seguidas
                        </label>

                        <label>
                            <input type="radio" name="pergunta8" value="b">
                            Alcançar dois dígitos em três estatísticas diferentes
                        </label>

                        <label>
                            <input type="radio" name="pergunta8" value="c">
                            Fazer três enterradas
                        </label>

                        <label>
                            <input type="radio" name="pergunta8" value="d">
                            Marcar exatamente 30 pontos
                        </label>
                    </div>


                    <!-- PERGUNTA 9 -->
                    <div class="pergunta">
                        <h2>9. Qual destas ações é uma forma de marcar pontos no basquete?</h2>

                        <label>
                            <input type="radio" name="pergunta9" value="a">
                            Cesta
                        </label>

                        <label>
                            <input type="radio" name="pergunta9" value="b">
                            Escanteio
                        </label>

                        <label>
                            <input type="radio" name="pergunta9" value="c">
                            Saque
                        </label>

                        <label>
                            <input type="radio" name="pergunta9" value="d">
                            Gol de cabeça
                        </label>
                    </div>


                    <!-- PERGUNTA 10 -->
                    <div class="pergunta">
                        <h2>10. Qual destes jogadores é conhecido por sua carreira no Los Angeles Lakers?</h2>

                        <label>
                            <input type="radio" name="pergunta10" value="a">
                            Kobe Bryant
                        </label>

                        <label>
                            <input type="radio" name="pergunta10" value="b">
                            Stephen Curry
                        </label>

                        <label>
                            <input type="radio" name="pergunta10" value="c">
                            Jayson Tatum
                        </label>

                        <label>
                            <input type="radio" name="pergunta10" value="d">
                            Joel Embiid
                        </label>
                    </div>


                    <button type="button" id="botaoFinalizar">
                        Finalizar Quiz
                    </button>

                    <div id="resultado"></div>

                </form>
            </div>
        </div>
    `);

    document
        .getElementById("botaoFinalizar")
        .addEventListener("click", verificarQuiz);
}