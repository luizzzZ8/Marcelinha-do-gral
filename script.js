document.getElementById("love-button").addEventListener("click", () => {
  // Número e mensagem segura de exemplo
  const numero = "+55 11 98805-6446"; // coloque o número real sem Pix
  const mensagem = encodeURIComponent("Oi meu amor! 😘 Estou pensando em você e queria te mandar um abraço virtual.");
  
  // Abre o WhatsApp no navegador ou app
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});
