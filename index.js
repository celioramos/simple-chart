function enviarMensagem(nome, mensagem) {
return `${nome}: ${mensagem}`;
}

function respostaBot(msg) {
return "Bot: Recebi sua mensagem! Obrigado.";
}

const mensagem = enviarMensagem("Usuário", "Oi");

console.log(mensagem);
console.log(respostaBot(mensagem));
