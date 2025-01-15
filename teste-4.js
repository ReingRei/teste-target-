const faturamentos = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

function calcularPercentuaisEstados(faturamento_estados) {
  const faturamento_total = Object.values(faturamento_estados).reduce((anterior, atual) => anterior + atual, 0);

  console.log(`Faturamento total: R$${faturamento_total.toFixed(2)}`)
  for (let estado in faturamento_estados) {
    const percentual = (faturamento_estados[estado] / faturamento_total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`)
  }
}

calcularPercentuaisEstados(faturamentos)