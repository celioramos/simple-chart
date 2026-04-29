function enviarMensagem(nome, mensagem) {
return `${nome}: ${mensagem}`;
}

function respostaAutomatica(mensagem) {
if (mensagem.toLowerCase().includes("oi")) {
return "Bot: Olá! Como posso ajudar?";
}
return "Bot: Entendi sua mensagem.";
}

// simulação
const msg = enviarMensagem("Usuário", "Oi");

console.log(msg);
console.log(respostaAutomatica(msg));
