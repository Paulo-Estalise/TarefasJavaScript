// Definindo o construtor do objeto Simulador
function Simulador(nome, versao) {
  this.nome = nome;
  this.versao = versao;
  this.ligado = false;
}

// Adicionando métodos ao protótipo do objeto Simulador
Simulador.prototype.iniciar = function () {
  if (!this.ligado) {
      console.log(`${this.nome} v${this.versao} está sendo iniciado.`);
      this.ligado = true;
  } else {
      console.log(`${this.nome} já está ligado.`);
  }
};

Simulador.prototype.parar = function () {
  if (this.ligado) {
      console.log(`${this.nome} está sendo desligado.`);
      this.ligado = false;
  } else {
      console.log(`${this.nome} já está desligado.`);
  }
};

// Exemplo de uso do objeto Simulador
const simuladorDeVoo = new Simulador("Simulador de Voo", "1.0");

simuladorDeVoo.iniciar(); // Saída: Simulador de Voo v1.0 está sendo iniciado.
simuladorDeVoo.parar();   // Saída: Simulador de Voo está sendo desligado.
simuladorDeVoo.iniciar(); // Saída: Simulador de Voo está sendo iniciado. (porque foi desligado na linha anterior)
