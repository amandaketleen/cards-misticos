// ====== IMPORTANDO AS CLASSES DO POO ======
import { Vampiro, Bruxa, Sereia, Fada, Dragao, Unicornio } from "./POO.js";

// ====== CRIANDO AS INSTÂNCIAS DAS CRIATURAS ======
let vampiro = new Vampiro("Van Helsing", 900, "Voar");
let bruxa = new Bruxa("Morgana", 750, "Poção");
let sereia = new Sereia("Sereia Azul", 350, "Encanto");
let fada = new Fada("Luna", 400, "Magia");
let dragao = new Dragao("Draco", 1000, "Fogo");
let unicornio = new Unicornio("Estrela", 210, "Energia");

let criaturas = [vampiro, bruxa, sereia, fada, dragao, unicornio];

// ====== SELEÇÃO DE ELEMENTOS DO DOM ======
let cards = document.querySelectorAll(".card");
let indiceAtual = 0;
let criaturaAtual;

// ====== FUNÇÃO PARA MOSTRAR O CARD ATUAL ======
function mostrarCard(indice) {
  cards.forEach((card, i) => {
    card.style.display = i === indice ? "block" : "none";
  });
  criaturaAtual = criaturas[indice]; // atualiza a criatura ativa
  atualizarTema(cards[indice]);
}

// ====== FUNÇÕES DAS SETAS ======
function proximoCard() {
  indiceAtual = (indiceAtual + 1) % cards.length;
  mostrarCard(indiceAtual);
}

function anteriorCard() {
  indiceAtual = (indiceAtual - 1 + cards.length) % cards.length;
  mostrarCard(indiceAtual);
}

// ====== FUNÇÃO PARA ATUALIZAR CORES E TEMAS ======
function atualizarTema(cardAtivo) {
  const cores = {
    vampiro: "#fc2424",
    bruxa: "#a020f0",
    sereia: "#00b4d8",
    fada: "#ff0095",
    dragao: "#03a559",
    unicornio: "#ff77ff",
  };

  const setaEsquerda = document.getElementById("seta-esquerda");
  const setaDireita = document.getElementById("seta-direita");
  const container = document.querySelector(".container");

  for (let tipo in cores) {
    if (cardAtivo.classList.contains(tipo)) {
      let cor = cores[tipo];

      [setaEsquerda, setaDireita].forEach((seta) => {
        seta.style.color = cor;
        seta.style.border = `2px solid ${cor}`;
        seta.style.boxShadow = `0 0 15px ${cor}80`;
      });

      cardAtivo.style.border = `3px solid ${cor}`;
      cardAtivo.style.boxShadow = `0 0 25px ${cor}, 0 0 60px ${cor}80`;

      container.style.transition = "all 0.5s ease";
      break;
    }
  }
}

// ====== FUNÇÃO PARA ATUALIZAR ENERGIA/MENSAGEM NO CARD ======
function atualizarEnergiaNaTela() {
  criaturas.forEach((criatura, i) => {
    const card = cards[i];
    const tipo = card.classList[1]; // "vampiro", "bruxa", etc.
    const spanEnergia = document.getElementById(`energia-${tipo}`);

    let mensagem = ""; // define a mensagem de forma consistente

    if (criatura.getEnergia() === criatura.energiaMaxima) {
      // Mostra só o valor inicial de energia
      mensagem = ` ${criatura.energiaMaxima}`;
    } else {
      // Mostra mensagem especial quando clicado
      switch (tipo) {
        case "vampiro":
          mensagem = ` Energia sugada!<br>${criatura.getEnergia()} de energia restante. 🧛`;
          break;
        case "bruxa":
          mensagem = ` Poção usada!<br>${criatura.getEnergia()} de energia restante. 🧪`;
          break;
        case "sereia":
          mensagem = ` Encanto lançado!<br>${criatura.getEnergia()} de energia restante. 🧜`;
          break;
        case "fada":
          mensagem = ` Magia usada!<br>${criatura.getEnergia()} de energia restante. 🧚`;
          break;
        case "dragao":
          mensagem = ` Fogo lançado!<br>${criatura.getEnergia()} de energia restante. 🐉`;
          break;
        case "unicornio":
          mensagem = ` Magia usada!<br>${criatura.getEnergia()} de energia. 🦄`;
          break;
      }
    }

    // Atualiza o card usando innerHTML pra interpretar o <br>
    spanEnergia.innerHTML = mensagem;
  });
}


// ====== ADICIONANDO EVENTOS NOS BOTÕES ======
cards.forEach((card, i) => {
  const criaturaCard = criaturas[i];
  const btnMagia = card.querySelector(".botao:nth-child(1)");
  const btnRestaurar = card.querySelector(".botao:nth-child(2)");

  btnMagia.addEventListener("click", () => {
    criaturaCard.usarEnergia();
    atualizarEnergiaNaTela();
  });

  btnRestaurar.addEventListener("click", () => {
    criaturaCard.restaurarEnergia();
    atualizarEnergiaNaTela();
  });
});

// ====== MOSTRA O PRIMEIRO CARD ======
mostrarCard(indiceAtual);

// ====== EXPÕE AS FUNÇÕES DE NAVEGAÇÃO GLOBALMENTE ======
window.proximoCard = proximoCard;
window.anteriorCard = anteriorCard;
