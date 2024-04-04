// manipulaçao do DOM
//let = local
//var = global
//cons = constante
document.querySelector('#notaRange').addEventListener("change", calcular);
document.querySelector('#game_title').addEventListener("change", calcular);

function calcular(){
    const notaRange = document.querySelector('#notaRange').value;
    const nome = document.querySelector('#game_title').value;
    
    let texto = "nota: " + notaRange;
    if(nome) texto = nome + " com " + texto;
    

    document.querySelector('#notaFinal').innerText = texto;
}