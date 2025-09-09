document.getElementById("love-button").addEventListener("click", () => {
  // Número e mensagem segura de exemplo
  const numero = "+55 11 98805-6446"; // coloque o número real sem Pix
  const mensagem = encodeURIComponent("Oi meu amorzinho 🥰.  Me manda um Pix de 1.000.000.00 reais meu amorzinho por favor! Meu Pix é CPF: 455.356.608-76. obrigada 😘.");
  
  // Abre o WhatsApp no navegador ou app
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});
