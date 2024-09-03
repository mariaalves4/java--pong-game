// Variáveis da Bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeBolinhaX = 5;
let velocidadeBolinhaY = 5;

// Variáveis da Raquete1
let xRaquete1 = 10;
let yRaquete1 = 150;
let raqueteComprimento1 = 10;
let raqueteAltura1 = 90;

// Variáveis da Raquete2
let xRaquete2 = 580;
let yRaquete2 = 150;
let raqueteComprimento2 = 10;
let raqueteAltura2 = 90;

// Velocidade das Raquetes
let velocidadeRaquete = 10;

// Placar do jogo
let pontosRaquete1 = 0;
let pontosRaquete2 = 0;

// Função inicial
function setup() {
  createCanvas(600, 400);
}

// Função de desenhar e atualizar a tela
function draw() {
  background(0);
  
  mostrarBolinha();
  movimentaBolinha();
  colisaoParede();
  
  mostrarRaquete1();
  movimentarRaquete1();
  colisaoComBolinha1();
  
  mostrarRaquete2();
  movimentarRaquete2();
  colisaoComBolinha2();
  
  mostrarPlacar();
  contarPontos();
  
  correcaoBug();
}

// Exibir a Bolinha
function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

// Movimentar a Bolinha
function movimentaBolinha() {
  xBolinha += velocidadeBolinhaX;
  yBolinha += velocidadeBolinhaY;
}

// Verifica colisão com a parede
function colisaoParede() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeBolinhaX *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeBolinhaY *= -1;
  }
}

// Mostra a Raquete1
function mostrarRaquete1() {
  rect(xRaquete1, yRaquete1, raqueteComprimento1, raqueteAltura1);
}

// Permite o movimento da Raquete1/Impede que atravesse parede
function movimentarRaquete1() {
  if (keyIsDown(87)) {
    yRaquete1 -= velocidadeRaquete;
  }
  if (keyIsDown(83)) {
    yRaquete1 += velocidadeRaquete;
  }
  
  if (yRaquete1 + raqueteAltura1 >= height) {
    yRaquete1 = 310;
  }
  if (yRaquete1 - raqueteComprimento1 < 0) {
    yRaquete1 = 0;
  }
}

// Verifica se a Bolinha colide com Raquete1
function colisaoComBolinha1() {
  if (xBolinha - raio < xRaquete1 + raqueteComprimento1 && yBolinha - raio < yRaquete1 + raqueteAltura1 && yBolinha + raio > yRaquete1) {
    velocidadeBolinhaX *= -1;
  }
}

// Mostra a Raquete2
function mostrarRaquete2() {
  rect(xRaquete2, yRaquete2, raqueteComprimento2, raqueteAltura2);
}

// Permite o movimento da Raquete2/Impede que atravesse parede
function movimentarRaquete2() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete2 -= velocidadeRaquete;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete2 += velocidadeRaquete;
  }
  
  if (yRaquete2 + raqueteAltura2 >= height) {
    yRaquete2 = 310;
  }
  if (yRaquete2 - raqueteComprimento2 < 0) {
    yRaquete2 = 0;
  }
}

// Verifica se a Bolinha colide com Raquete2
function colisaoComBolinha2() {
  if (xBolinha - raio > xRaquete2 - raqueteComprimento2 && yBolinha - raio > yRaquete2 - raqueteAltura2 && yBolinha - raio > yRaquete2) {
    velocidadeBolinhaX *= -1;
  }
}

// Mostra o Placar
function mostrarPlacar() {
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(pontosRaquete1, 278, 26);
  text(pontosRaquete2, 321, 26);
}

// Contar os pontos no Placar
function contarPontos() {
  if (xBolinha > 590) {
    pontosRaquete1 += 1;
  }
  if (xBolinha < 10) {
    pontosRaquete2 += 1;
  }
}

// Corrigindo um bug da bola não tocar o canto e somar o ponto
function correcaoBug() {
  if (yRaquete2 + raqueteAltura2 < yBolinha - raio && xRaquete2 - raqueteComprimento2 < xBolinha - raio) {
    pontosRaquete1 += 1;
  }
}
