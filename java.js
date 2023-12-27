// Função para calcular o valor da parcela decrescente
function calcularParcela(valorEmprestimo, taxaJuros, numeroParcelas) {
    const taxaMensal = taxaJuros / 100;
    const fator = Math.pow(1 + taxaMensal, numeroParcelas);
    const valorParcela = (valorEmprestimo * taxaMensal * fator) / (fator - 1);
    return valorParcela;
  }
  
  // Solicitar ao usuário o valor do empréstimo
  const valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
  
  // Verificar se o valor inserido é um número válido
  if (isNaN(valorEmprestimo) || valorEmprestimo <= 0) {
    console.log("Por favor, insira um valor válido para o empréstimo.");
  } else {
    const taxaJuros = 1; // Taxa de juros mensal em porcentagem
    const numeroParcelas = 5; // Número de parcelas
  
    // Utilizando o loop for
    console.log("Usando o loop for:");
    for (let i = 0; i < numeroParcelas; i++) {
      const valorParcela = calcularParcela(valorEmprestimo, taxaJuros, numeroParcelas - i);
      console.log(`Parcela ${i + 1}: R$ ${valorParcela.toFixed(2)}`);
    }
  }
  