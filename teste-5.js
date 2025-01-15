const frase = 'Estou chegando na Target Sistemas'

function inverterCaracteres(sentenca) {
    let sentenca_invertida = '';
    for (let index = sentenca.length - 1; index > 0; index--) {
        sentenca_invertida += sentenca[index];
    }

    console.log(`Frase original: ${sentenca}`);
    console.log(`Frase invertida: ${sentenca_invertida}`);
}

inverterCaracteres(frase)