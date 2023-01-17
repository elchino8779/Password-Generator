//Variables

let container = document.getElementById("container");
let generar = document.getElementById("generar");
let copiar = document.getElementById("copiar");
let copiado = document.getElementById("copiado");


//Funciones

function generarPass() {

    let resultado = "";

    for (let i = 0; i < 17; i++) {

        let letrasMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let letrasMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let aleatorio = Math.floor(Math.random() * 3);
        let aleatorioLetras = Math.floor(Math.random() * 26);
        let aleatorioNumeros = Math.floor(Math.random() * 10);

        if (aleatorio == 0) {
            resultado = resultado + letrasMinusculas[aleatorioLetras];
        }
        else if (aleatorio == 1) {
            resultado = resultado + letrasMayusculas[aleatorioLetras];
        }
        else {
            resultado = resultado + numeros[aleatorioNumeros];
        };
    };

    container.innerText = resultado;
    copiar.innerText = "Copy";


};

function globoCopiado(){
    copiado.style.opacity = "1";
    setTimeout(() => {
        copiado.style.opacity = "0";
    }, 1300);
    copiar.innerText = "Copied";
    navigator.clipboard.writeText(container.innerText);
};

generar.addEventListener("click", generarPass);

copiar.addEventListener("click", function(){
    if(container.innerText != ""){
        globoCopiado();
    }
});



