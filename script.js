// Catálogo de móveis com imagens
const furnitureItems = {
  "Sofá": "https://img.icons8.com/color/96/sofa.png",
  "Cama": "https://img.icons8.com/color/96/bed.png",
  "Mesa": "https://img.icons8.com/color/96/table.png",
  "TV": "https://img.icons8.com/color/96/tv.png",
  "Geladeira": "https://img.icons8.com/color/96/fridge.png",
  "Luz LED": "https://img.icons8.com/fluency/96/light-on.png"
};

const furnitureList = document.getElementById("furniture-list");
const roomArea = document.getElementById("room-area");

// Fundos dos cômodos
const roomBackgrounds = {
  sala: "https://i.imgur.com/q9Z1ZbE.jpg",
  quarto: "https://i.imgur.com/auVnQDn.jpg",
  cozinha: "https://i.imgur.com/d5s1VXX.jpg"
};

// Carregar catálogo
Object.keys(furnitureItems).forEach(item => {
  const div = document.createElement("div");
  div.classList.add("furniture");

  const img = document.createElement("img");
  img.src = furnitureItems[item];
  img.alt = item;

  const label = document.createElement("p");
  label.textContent = item;

  div.appendChild(img);
  div.appendChild(label);

  // Ao clicar, coloca no cômodo
  div.addEventListener("click", () => {
    const roomImg = document.createElement("img");
    roomImg.src = furnitureItems[item];
    roomImg.alt = item;
    roomImg.draggable = true;

    // Efeito de LED diferente
    if (item === "Luz LED") {
      roomImg.style.filter = "drop-shadow(0 0 15px yellow)";
    }

    // Permitir arrastar dentro do cômodo
    roomImg.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", "");
      e.target.classList.add("dragging");
    });

    roomImg.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });

    roomArea.appendChild(roomImg);
  });

  furnitureList.appendChild(div);
});

// Mudar fundo do cômodo
function changeRoom() {
  const select = document.getElementById("room-select");
  const choice = select.value;
  roomArea.style.backgroundImage = `url(${roomBackgrounds[choice]})`;
}

// Set padrão
changeRoom();

// Ideias simuladas
function generateIdeas() {
  const input = document.getElementById("ai-input").value.toLowerCase();
  const output = document.getElementById("ai-output");
  let resposta = "";

  if (input.includes("sala")) {
    resposta = "💡 Coloque o sofá de frente para a TV e LEDs atrás para aconchego.";
  } else if (input.includes("quarto")) {
    resposta = "💡 Centralize a cama, adicione LED suave e mesa de cabeceira.";
  } else if (input.includes("cozinha")) {
    resposta = "💡 Geladeira no canto, mesa próxima à janela e bastante luz.";
  } else {
    resposta = "💡 Use móveis claros e iluminação com LED para ampliar o espaço.";
  }

  output.textContent = resposta;
}