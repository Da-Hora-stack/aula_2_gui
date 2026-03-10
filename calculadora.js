function soma(){
    let num1 = parseFloat(document.getElementById("num1-soma").value);
    let num2 = parseFloat(document.getElementById("num2-soma").value);
    let resultado1 = num1 + num2;
    document.getElementById("resultado1").innerText = resultado1;
}

function menos(){
    let num1 = parseFloat(document.getElementById("num1-sub").value);
    let num2 = parseFloat(document.getElementById("num2-sub").value);
    let resultado2 = num1 - num2;
    document.getElementById("resultado2").textContent = "O resultado da subtração é: " + resultado2;
}

function mult(){
    let num1 = parseFloat(document.getElementById("num1-mult").value);
    let num2 = parseFloat(document.getElementById("num2-mult").value);
    let resultado3 = num1 * num2;
    document.getElementById("resultado3").textContent = "O resultado da multiplicação é: " + resultado3;
}

function div(){
    let num1 = parseFloat(document.getElementById("num1-div").value);
    let num2 = parseFloat(document.getElementById("num2-div").value);
    let resultado4 = num1 / num2;
    document.getElementById("resultado4").textContent = "O resultado da divisão é: " + resultado4;
}

function areatriangulo(){
    let base = parseFloat(document.getElementById("base-triangulo").value);
    let altura = parseFloat(document.getElementById("altura-triangulo").value);
    let resultado5 = (base * altura) / 2;
    document.getElementById("resultado5").textContent = "A área do triângulo é: " + resultado5;
}

function Quadrado(){
    let lado = parseFloat(document.getElementById("lado-quadrado").value);
    let resultado6 = lado * lado;
    document.getElementById("resultado6").textContent = "A área do quadrado é: " + resultado6;
}

function Retangulo(){
    let base = parseFloat(document.getElementById("base-retangulo").value);
    let altura = parseFloat(document.getElementById("altura-retangulo").value);
    let resultado7 = base * altura;
    document.getElementById("resultado7").textContent = "A área do retângulo é: " + resultado7;
}

function trapézio(){
    let base = parseFloat(document.getElementById("base-maior-trapezio").value);
    let altura = parseFloat(document.getElementById("altura-trapezio").value);
    let baseMenor = parseFloat(document.getElementById("base-menor-trapezio").value);
    let resultado8 = (base + baseMenor) * altura;
    document.getElementById("resultado8").textContent = "A área do trapezio é: " + resultado8;
}

function losango(){
    let base = parseFloat(document.getElementById("diagonal-maior").value);
    let altura = parseFloat(document.getElementById("diagonal-menor").value);
    let resultado9 = base * base * altura;
    document.getElementById("resultado9").textContent = "A área do losango é: " + resultado9;
}

function circulo(){
    let base = parseFloat(document.getElementById("raio-do-circulo").value);
    let resultado10 = base * base * 3.14;
    document.getElementById("resultado10").textContent = "A área do circulo é: " + resultado10;
}

function setor_circular(){
    let base = parseFloat(document.getElementById("raio-setor-circular").value);
    let altura = parseFloat(document.getElementById("angulo-setor-circular").value);
    let resultado11 = (base * base * 3.14) * (altura / 360);
    document.getElementById("resultado11").textContent = "A área do setor circular é: " + resultado11;
}

function coroa_circular(){
    let base = parseFloat(document.getElementById("raio-maior-coroa-circular").value);
    let altura = parseFloat(document.getElementById("raio-menor-coroa-circular").value);
    let resultado12 = (base * base * 3.14) - (altura * altura * 3.14);
    document.getElementById("resultado12").textContent = "A área da coroa circular é: " + resultado12;
}

function elipse(){
    let base = parseFloat(document.getElementById("raio-maior-elipse").value);
    let altura = parseFloat(document.getElementById("raio-menor-elipse").value);
    let resultado13 = base * altura * 3.14;
    document.getElementById("resultado13").textContent = "A área da elipse é: " + resultado13;
}

function poligono_regular(){
    let base = parseFloat(document.getElementById("perimetro-poligono-regular").value);
    let altura = parseFloat(document.getElementById("apotema-poligono-regular").value);
    let resultado14 = (base * altura) / 2;
    document.getElementById("resultado14").textContent = "A área do polígono regular é: " + resultado14;
}

function paralelogramo(){
    let base = parseFloat(document.getElementById("base-paralelogramo").value);
    let altura = parseFloat(document.getElementById("altura-paralelogramo").value);
    let resultado15 = base * altura;
    document.getElementById("resultado15").textContent = "A área do paralelogramo é: " + resultado15;
}
//Quadrado,retangulo,triângulo,trapézio,círculo,paralelogramo,losango,setor,circular,coroa sircular,elipse, poligono regular