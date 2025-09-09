// Criar grid
const grid = document.getElementById("grid");
for (let i = 0; i < 48; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => placeFurniture(cell));
  grid.appendChild(cell);
}

// Biblioteca de móveis
const furnitureItems = ["Sofá", "Cama", "Mesa", "TV", "Geladeira", "Luz LED"];
const furnitureList = document.getElementById("furniture-list");
let selectedFurniture = null;

furnitureItems.forEach(item => {
  const div = document.createElement("div");
  div.textContent = item;
  div.classList.add("furniture");
  div.addEventListener("click", () => selectFurniture(item));
  furnitureList.appendChild(div);
});

function selectFurniture(item) {
  selectedFurniture = item;
  document.getElementById("selected-item").textContent = "Selecionado: " + item;
}

function placeFurniture(cell) {
  if (selectedFurniture) {
    cell.textContent = selectedFurniture;
    cell.style.background = selectedFurniture === "Luz LED" ? "#fef08a" : "#7c3aed";
    cell.style.color = "white";
  }
}

// Ideias simuladas (mock de IA)
function generateIdeas() {
  const input = document.getElementById("ai-input").value.toLowerCase();
  const output = document.getElementById("ai-output");
  let resposta = "";

  if (input.includes("sala")) {
    resposta = "Sugestão: Coloque o sofá perto da TV e adicione LEDs para dar aconchego.";
  } else if (input.includes("quarto")) {
    resposta = "Sugestão: Cama centralizada, LED suave nas laterais e mesa de cabeceira.";
  } else if (input.includes("cozinha")) {
    resposta = "Sugestão: Geladeira no canto, mesa próxima à janela e boa iluminação.";
  } else {
    resposta = "Dica geral: use móveis claros e iluminação com LED para ampliar o espaço.";
  }

  output.textContent = resposta;
}