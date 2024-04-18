const nome = "Silvana"; 
const genero = "F"; 
const idadeConstante = 48; 
const contribuicaoConst = 23;

const tempoContribuicaoMinimoHomem = 35; 
const tempoContribuicaoMinimoMulher = 30; 
const somaMinimaMulher = 85; 
const somaMinimaHomem = 95;

const somaIdadeContribuicao = idadeConstante + contribuicaoConst;

if (genero === "F") { 
    if (contribuicaoConst >= tempoContribuicaoMinimoMulher && somaIdadeContribuicao >= somaMinimaMulher) { 
        console.log(`${nome}, você pode se aposentar!`); 
    } else { 
        console.log(`${nome}, você não pode se aposentar!`);
    }
} else if (genero === "M") {
    if (contribuicaoConst >= tempoContribuicaoMinimoHomem && somaIdadeContribuicao >= somaMinimaHomem) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
} else {
    console.log("Sexo não reconhecido. Por favor, digite 'F' para feminino ou 'M' para masculino.");
}
