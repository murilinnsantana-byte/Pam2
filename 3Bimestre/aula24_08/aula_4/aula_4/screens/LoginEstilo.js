const estilo = document.createElement("style");

estilo.innerHTML = `

```
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    min-height: 100vh;
    margin: 0;
    background: linear-gradient(
        135deg,
        #111111,
        #222222,
        #f57c00
    );

    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
}

.login-box {
    width: 100%;
    max-width: 420px;

    background-color: #ffffff;

    padding: 40px;

    border-radius: 20px;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.4);

    text-align: center;
}

.login-icon {
    font-size: 60px;
    margin-bottom: 10px;
}

.login-box h1 {
    color: #f57c00;
    font-size: 32px;
    margin-bottom: 10px;
}

.login-descricao {
    color: #666666;
    font-size: 16px;
    margin-bottom: 30px;
}

.campo {
    text-align: left;
    margin-bottom: 20px;
}

.campo label {
    display: block;
    color: #222222;
    font-weight: bold;
    margin-bottom: 8px;
}

.campo input {
    width: 100%;

    padding: 14px;

    border: 2px solid #dddddd;
    border-radius: 10px;

    font-size: 16px;

    outline: none;

    transition: 0.2s;
}

.campo input:focus {
    border-color: #f57c00;
}

#erroLogin {
    color: #d32f2f;
    font-size: 14px;
    margin-bottom: 15px;
    min-height: 18px;
}

#loginForm button {
    width: 100%;

    padding: 15px;

    background-color: #f57c00;
    color: #ffffff;

    border: none;
    border-radius: 10px;

    font-size: 18px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

#loginForm button:hover {
    background-color: #e65100;
    transform: scale(1.02);
}

@media (max-width: 600px) {

    .login-box {
        padding: 30px 20px;
    }

    .login-box h1 {
        font-size: 28px;
    }

}
```

`;

document.head.appendChild(estilo);
