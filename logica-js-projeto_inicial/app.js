alert('Bem vindo ao jogo do numero secreto')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
chute = prompt(`Digite seu chute entre 1 a ${numeroMaximo}`);

if (chute == numeroSecreto){
    break;
   //  alert (`Você acertou! O numero secreto realmente é ${numeroSecreto} com total de ${tentativas} tentativas!`);
} else {
            if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`)
            }
}
tentativas++;
}

//int PalavraTentativa;
if (tentativas > 1){
     alert (`Você acertou! O numero secreto realmente é ${numeroSecreto} com total de ${tentativas} tentativas!`);
    PalavraTentativa = "tentativas";
   } else {
     alert (`Você acertou! O numero secreto realmente é ${numeroSecreto} com total de ${tentativas} tentativas!`);
    PalavraTentativa = "tentativa";
}