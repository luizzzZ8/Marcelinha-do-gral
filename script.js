document.getElementById("love-button").addEventListener("click", () => {
  // Número e mensagem segura de exemplo
  const numero = "+5511999999999"; // coloque o número real sem Pix
  const mensagem = encodeURIComponent("Oi meu amor! 😘 Estou pensando em você e queria te mandar um abraço virtual.");
  
  // Abre o WhatsApp no navegador ou app
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});