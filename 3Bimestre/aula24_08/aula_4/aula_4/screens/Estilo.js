const estilo = document.createElement("style");

estilo.innerHTML = `

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

   body {
    background: linear-gradient(
        135deg,
        #111111,
        #222222,
        #f57c00
    );

    min-height: 100vh;
    width: 100%;
    padding: 30px 15px;

    overflow-y: auto;
}


        min-height: 100vh;
        padding: 30px 15px;
    }

    .container {
        width: 100%;
        max-width: 900px;
        margin: auto;
    }

    .quiz {
        background-color: #ffffff;
        border-radius: 20px;
        padding: 35px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    h1 {
        text-align: center;
        color: #f57c00;
        font-size: 40px;
        margin-bottom: 10px;
    }

    .descricao {
        text-align: center;
        color: #555555;
        font-size: 18px;
        margin-bottom: 35px;
    }

    .pergunta {
        background-color: #f5f5f5;
        border-left: 6px solid #f57c00;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 25px;
    }

    .pergunta h2 {
        font-size: 20px;
        color: #222222;
        margin-bottom: 18px;
    }

    .pergunta label {
        display: block;
        background-color: #ffffff;
        border: 2px solid #dddddd;
        border-radius: 8px;
        padding: 12px;
        margin: 10px 0;
        cursor: pointer;
        transition: 0.2s;
    }

    .pergunta label:hover {
        background-color: #fff3e0;
        border-color: #f57c00;
    }

    .pergunta input {
        margin-right: 10px;
        accent-color: #f57c00;
        cursor: pointer;
    }

    #botaoFinalizar {
        display: block;
        width: 100%;
        background-color: #f57c00;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 16px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
    }

    #botaoFinalizar:hover {
        background-color: #e65100;
        transform: scale(1.02);
    }

    #resultado {
        text-align: center;
        margin-top: 25px;
        padding: 20px;
        background-color: #fff3e0;
        border-radius: 10px;
        color: #222222;
    }

    #resultado h2 {
        color: #f57c00;
        margin-bottom: 10px;
    }

    #resultado p {
        font-size: 18px;
        margin: 10px 0;
    }

    #resultado button {
        background-color: #222222;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px 20px;
        margin-top: 10px;
        cursor: pointer;
        font-size: 16px;
    }

    #resultado button:hover {
        background-color: #000000;
    }

    @media (max-width: 600px) {

        .quiz {
            padding: 20px;
        }

        h1 {
            font-size: 30px;
        }

        .pergunta h2 {
            font-size: 17px;
        }

    }

`;

document.head.appendChild(estilo);
