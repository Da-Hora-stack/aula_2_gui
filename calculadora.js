function soma(){
    const num1 = parseFloat(document.getElementById("num1-soma").value);
    const num2 = parseFloat(document.getElementById("num2-soma").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").textContent = "O resultado da soma é: " + resultado;
}

function menos(){
    const num1 = parseFloat(document.getElementById("num1-sub").value);
    const num2 = parseFloat(document.getElementById("num2-sub").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").textContent = "O resultado da subtração é: " + resultado;
}

function mult(){
    const num1 = parseFloat(document.getElementById("num1-mult").value);
    const num2 = parseFloat(document.getElementById("num2-mult").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").textContent = "O resultado da multiplicação é: " + resultado;
}

function div(){
    const num1 = parseFloat(document.getElementById("num1-div").value);
    const num2 = parseFloat(document.getElementById("num2-div").value);
    const resultado = num1 / num2;
    document.getElementById("resultado").textContent = "O resultado da divisão é: " + resultado;
}

function areatriangulo(){
    const base = parseFloat(document.getElementById("base-triangulo").value);
    const altura = parseFloat(document.getElementById("altura-triangulo").value);
    const resultado = (base * altura) / 2;
    document.getElementById("resultado").textContent = "A área do triângulo é: " + resultado;
}

function Quadrado(){
    const lado = parseFloat(document.getElementById("lado-quadrado").value);
    const resultado = lado * lado;
    document.getElementById("resultado").textContent = "A área do quadrado é: " + resultado;
}

function Retangulo(){
    const base = parseFloat(document.getElementById("base-retangulo").value);
    const altura = parseFloat(document.getElementById("altura-retangulo").value);
    const resultado = base * altura;
    document.getElementById("resultado").textContent = "A área do retângulo é: " + resultado;
}

function trapézio(){
    const base = parseFloat(document.getElementById("base-maior-trapezio").value);
    const altura = parseFloat(document.getElementById("altura-trapezio").value);
    const baseMenor = parseFloat(document.getElementById("base-menor-trapezio").value);
    const resultado = (base + baseMenor) * altura;
    document.getElementById("resultado").textContent = "A área do trapezio é: " + resultado;
}

function losango(){
    const base = parseFloat(document.getElementById("diagonal-maior").value);
    const altura = parseFloat(document.getElementById("diagonal-menor").value);
    const resultado = base * base * altura;
    document.getElementById("resultado").textContent = "A área do losango é: " + resultado;
}

function circulo(){
    const base = parseFloat(document.getElementById("raio-do-circulo").value);
    const resultado = base * base * 3.14;
    document.getElementById("resultado").textContent = "A área do circulo é: " + resultado;
}

function setor_circular(){
    const base = parseFloat(document.getElementById("raio-setor-circular").value);
    const altura = parseFloat(document.getElementById("angulo-setor-circular").value);
    const resultado = (base * base * 3.14) * (altura / 360);
    document.getElementById("resultado").textContent = "A área do setor circular é: " + resultado;
}

function coroa_circular(){
    const base = parseFloat(document.getElementById("raio-maior-coroa-circular").value);
    const altura = parseFloat(document.getElementById("raio-menor-coroa-circular").value);
    const resultado = (base * base * 3.14) - (altura * altura * 3.14);
    document.getElementById("resultado").textContent = "A área da coroa circular é: " + resultado;
}

function elipse(){
    const base = parseFloat(document.getElementById("raio-maior-elipse").value);
    const altura = parseFloat(document.getElementById("raio-menor-elipse").value);
    const resultado = base * altura * 3.14;
    document.getElementById("resultado").textContent = "A área da elipse é: " + resultado;
}

function poligono_regular(){
    const base = parseFloat(document.getElementById("perimetro-poligono-regular").value);
    const altura = parseFloat(document.getElementById("apotema-poligono-regular").value);
    const resultado = (base * altura) / 2;
    document.getElementById("resultado").textContent = "A área do polígono regular é: " + resultado;
}

function paralelogramo(){
    const base = parseFloat(document.getElementById("base-paralelogramo").value);
    const altura = parseFloat(document.getElementById("altura-paralelogramo").value);
    const resultado = base * altura;
    document.getElementById("resultado").textContent = "A área do paralelogramo é: " + resultado;
}
//Quadrado,retangulo,triângulo,trapézio,círculo,paralelogramo,losango,setor,circular,coroa sircular,elipse, poligono regular