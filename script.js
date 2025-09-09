// Criar grid (6x8 = 48 quadrados)
const grid = document.getElementById("grid");
for (let i = 0; i < 48; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => placeFurniture(cell));
  grid.appendChild(cell);
}

// Biblioteca de móveis com imagens
const furnitureItems = {
  "Sofá": "https://img.icons8.com/color/96/sofa.png",
  "Cama": "https://img.icons8.com/color/96/bed.png",
  "Mesa": "https://img.icons8.com/color/96/table.png",
  "TV": "https://img.icons8.com/color/96/tv.png",
  "Geladeira": "https://img.icons8.com/color/96/fridge.png",
  "Luz LED": "https://img.icons8.com/fluency/96/light-on.png"
};

const furnitureList = document.getElementById("furniture-list");
let selectedFurniture = null;

// Mostrar biblioteca de móveis
Object.keys(furnitureItems).forEach(item => {
  const div = document.createElement("div");
  div.classList.add("furniture");
  div.textContent = item;
  div.addEventListener("click", () => selectFurniture(item));
  furnitureList.appendChild(div);
});

function selectFurniture(item) {
  selectedFurniture = item;
  document.getElementById("selected-item").textContent = "Selecionado: " + item;
}

function placeFurniture(cell) {
  if (selectedFurniture) {
    cell.innerHTML = ""; // limpa a célula
    const img = document.createElement("img");
    img.src = furnitureItems[selectedFurniture];
    cell.appendChild(img);

    // efeito especial para LEDs
    if (selectedFurniture === "Luz LED") {
      cell.style.background = "radial-gradient(circle, #fef08a, #facc15)";
    } else {
      cell.style.background = "white";
    }
  }
}

// Ideias simuladas
function generateIdeas() {
  const input = document.getElementById("ai-input").value.toLowerCase();
  const output = document.getElementById("ai-output");
  let resposta = "";

  if (input.includes("sala")) {
    resposta = "💡 Coloque o sofá de frente para a TV e LEDs atrás para dar aconchego.";
  } else if (input.includes("quarto")) {
    resposta = "💡 Centralize a cama, use LED suave nas laterais e coloque mesa de cabeceira.";
  } else if (input.includes("cozinha")) {
    resposta = "💡 Geladeira no canto, mesa próxima à janela e bastante iluminação.";
  } else {
    resposta = "💡 Use móveis claros e iluminação com LED para ampliar o espaço.";
  }

  output.textContent = resposta;
}