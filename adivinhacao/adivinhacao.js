//Toda vez que você clicar na tela, o navegador permite você falar
//As tentativas só contam, quando ele entende que você falou

let fala = new p5.SpeechRec('pt-BR', textoTela);
let num = Math.floor(Math.random() * 100);
let cont = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  textSize(18);
  textAlign(CENTER);
  
  if(cont < 5){
    background(255);
    text("Adivinhe um numero", displayWidth/2, displayHeight/2);
    fala.start();
  }else{
    background(255);
    text(`Fim de jogo! Acabaram as tentativas! O número era ${num}`, displayWidth/2, displayHeight/2);
    num = Math.floor(Math.random() * 100);
    cont = 0;
  }
}

function draw() {}

function textoTela(){
    if (fala.resultString == num) {
      background(0, 255, 0);
      text(`Acertou o número é ${num}`, displayWidth/2, displayHeight/2);
      num = Math.floor(Math.random() * 100);
      cont = 0;
    }else if(fala.resultString >= num){
      background(255, 255, 0);
      text(`Errou o número é menor que ${fala.resultString}`, displayWidth/2, displayHeight/2);
      cont++;
    }else if(fala.resultString <= num){
      background(255, 255, 0);
      text(`Errou o número é maior que ${fala.resultString}`, displayWidth/2, displayHeight/2);
      cont++;
    }
}

function mousePressed(){
  setup();
}
