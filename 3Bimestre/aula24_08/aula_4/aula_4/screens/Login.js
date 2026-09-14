import { Home } from "./Home.js";
import "./LoginEstilo.js";

export function Login() {

```
document.body.innerHTML = "";

document.body.insertAdjacentHTML("beforeend", `
    <div class="login-container">

        <div class="login-box">

            <div class="login-icon">
                🏀
            </div>

            <h1>Quiz de Basquete</h1>

            <p class="login-descricao">
                Entre para testar seus conhecimentos!
            </p>

            <form id="loginForm">

                <div class="campo">
                    <label for="usuario">Usuário</label>

                    <input
                        type="text"
                        id="usuario"
                        placeholder="Digite seu usuário"
                        required
                    >
                </div>

                <div class="campo">
                    <label for="senha">Senha</label>

                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                        required
                    >
                </div>

                <p id="erroLogin"></p>

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>

    </div>
`);

document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const usuario = document
            .getElementById("usuario")
            .value
            .trim();

        const senha = document
            .getElementById("senha")
            .value
            .trim();

        const erro = document.getElementById("erroLogin");

        // Login de demonstração
        if (usuario === "admin" && senha === "1234") {

            erro.textContent = "";

            Home();

        } else {

            erro.textContent =
                "Usuário ou senha incorretos.";
        }
    });
```

}
