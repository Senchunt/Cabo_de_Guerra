// Preciso criar uma lista com 3 jogadores
personagem = ["","",""]
viloes = ["","",""]

forcaPersonagem = 0
forcaViloes = 0

alert("O array Personagem contém: " + personagem)
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem:" + (i + 1))
  personagem[i] = escolhaPersonagem
  // Calcular a força de cada jogador, e depois somar para saber a força do time
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
 // sengunda maneira de fazer a mesma coisa acima: forcaHerois += Math.floor(Math.random() * 10) + 1)

}
console.log("Agora o Array Personagem contém:" + personagem)

console.log("inicioViloes: " + viloes)
for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 10)
  viloesPossiveis = ["Magneto","Thanos","Apocalipse","Orochimaru","Lex Luthor","Loki","Griffith","Nicol Bolas","Estarossa","Freeza"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  // Calcular a força de cada jogador do time do computador - viloes
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
  // pode-se escrever tb assim: forcaViloes += Math.floor(Math.random) * 10) + 1
}
console.log("finalViloes: " + viloes)

// Comparar os dois times para saber quem venceu. usando o IF
if (forcaPersonagem > forcaViloes){
  alert("Seu time é muito forte! Você ganhou do nosso time! Sua força foi: " + forcaPersonagem)
}
else{
  if (forcaPersonagem < forcaViloes){
    alert("Seu time tem que melhorar muito ainda! Volte a treinar! Sua força foi: " + forcaViloes)
  }
  else {
    alert("Os dois times tiveram a mesma força! Os times empataram!")
  }
}
