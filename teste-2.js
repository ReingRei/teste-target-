function fibonacci(n) {
    let a = 0;
    let b = 1;
    let ultimo;
    
    if (n === 0) return true;
    
    while (b < n) {
      ultimo = b;
      b = a + b;
      a = ultimo;
    }
    
    return b === n;
}

  
const numero = 38; // O número pode ser alterado aqui 
if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}