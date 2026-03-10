function soma() {
    const num1 = parseFloat(document.getElementById("num1-soma").value);
    const num2 = parseFloat(document.getElementById("num2-soma").value);
    const resultado = num1 + num2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "O resultado da soma é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function menos() {
    const num1 = parseFloat(document.getElementById("num1-sub").value);
    const num2 = parseFloat(document.getElementById("num2-sub").value);
    const resultado = num1 - num2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "O resultado da subtração é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function mult() {
    const num1 = parseFloat(document.getElementById("num1-mult").value);
    const num2 = parseFloat(document.getElementById("num2-mult").value);
    const resultado = num1 * num2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "O resultado da multiplicação é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function div() {
    const num1 = parseFloat(document.getElementById("num1-div").value);
    const num2 = parseFloat(document.getElementById("num2-div").value);
    const resultado = num1 / num2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "O resultado da divisão é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function areatriangulo() {
    const base = parseFloat(document.getElementById("base-triangulo").value);
    const altura = parseFloat(document.getElementById("altura-triangulo").value);
    const resultado = (base * altura) / 2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do triângulo é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function Quadrado() {
    const lado = parseFloat(document.getElementById("lado-quadrado").value);
    const resultado = lado * lado;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do quadrado é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function Retangulo() {
    const base = parseFloat(document.getElementById("base-retangulo").value);
    const altura = parseFloat(document.getElementById("altura-retangulo").value);
    const resultado = base * altura;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do retângulo é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function trapézio() {
    const base = parseFloat(document.getElementById("base-maior-trapezio").value);
    const altura = parseFloat(document.getElementById("altura-trapezio").value);
    const baseMenor = parseFloat(document.getElementById("base-menor-trapezio").value);
    // Área do trapézio = ((base maior + base menor) * altura) / 2
    const resultado = ((base + baseMenor) * altura) / 2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do trapezio é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function losango() {
    const base = parseFloat(document.getElementById("diagonal-maior").value);
    const altura = parseFloat(document.getElementById("diagonal-menor").value);
    // Área do losango = (diagonal maior * diagonal menor) / 2
    const resultado = (base * altura) / 2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do losango é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function circulo() {
    const base = parseFloat(document.getElementById("raio-do-circulo").value);
    const resultado = base * base * Math.PI;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do circulo é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function setor_circular() {
    const base = parseFloat(document.getElementById("raio-setor-circular").value);
    const altura = parseFloat(document.getElementById("angulo-setor-circular").value);
    const resultado = (base * base * Math.PI) * (altura / 360);
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área do setor circular é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function coroa_circular() {
    const base = parseFloat(document.getElementById("raio-maior-coroa-circular").value);
    const altura = parseFloat(document.getElementById("raio-menor-coroa-circular").value);
    const resultado = (base * base * Math.PI) - (altura * altura * Math.PI);
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").textContent = "A área da coroa circular é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function elipse() {
    const base = parseFloat(document.getElementById("raio-maior-elipse").value);
    const altura = parseFloat(document.getElementById("raio-menor-elipse").value);
    const resultado = base * altura * Math.PI;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toFixed(2);
    document.getElementById("resultado").textContent = "A área da elipse é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function poligono_regular() {
    const base = parseFloat(document.getElementById("perimetro-poligono-regular").value);
    const altura = parseFloat(document.getElementById("apotema-poligono-regular").value);
    const resultado = (base * altura) / 2;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toFixed(2);
    document.getElementById("resultado").textContent = "A área do polígono regular é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}

function paralelogramo() {
    const base = parseFloat(document.getElementById("base-paralelogramo").value);
    const altura = parseFloat(document.getElementById("altura-paralelogramo").value);
    const resultado = base * altura;
    if (isNaN(resultado) || !isFinite(resultado)) {
        document.getElementById("resultado").textContent = "Resultado inválido";
        alert("O resultado não é um número válido");
        return;
    }
    const resultadoFormatado = resultado.toFixed(2);
    document.getElementById("resultado").textContent = "A área do paralelogramo é: " + resultadoFormatado;
    alert("O resultado é: " + resultadoFormatado);
}
//Quadrado,retangulo,triângulo,trapézio,círculo,paralelogramo,losango,setor,circular,coroa sircular,elipse, poligono regular