//tipos primitivos//

//boolean//
var vOuf = false;
console.log(typeof(vOuf));

//number//
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Sandro';
console.log(typeof(nome));

let variavel2 = 'Megumi';
console.log(variavel2);

const constante = 'Sandro';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocal = 'local';
    console.log(escopoLocal);
}
escopoLocal();

//atribução//
var atribuicao = 'Sandro';

//comparação//
var comparacao = '1' == 1;
console.log(comparacao);

//comparação idêntica//
var comparacaoIdentica = 'O' === 0;
console.log(comparacaoIdentica);

//adição//
var adicao = 1 + 1;
console.log(adicao);

//subtração//
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação//
var multiplicacao = 2 * 2;
console.log(multiplicacao);

//divisão real//
var divisaoReal = 10 / 2;
console.log(divisaoReal);

//divisão inteira//
var divisaoInteira = 10 % 6;
console.log(divisaoInteira);

//potenciação//
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que//
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que//
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual//
var maiorOuigual = 5 >= 5;
console.log(maiorOuigual);

//menor ou igual//
var menorOuigual = 5 <= 6;
console.log(menorOuigual);

//variável verdade//
var verdade = true && true;
console.log(verdade);

//variável falsa//
var falsa = false || false;
console.log(falsa);

//variável não//
var nao = !true;
console.log(nao);