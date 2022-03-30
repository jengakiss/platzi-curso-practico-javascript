// CODIGO DEL CUADRADO //
console.group("Cuadrado"); //SIRVE PARA FORMAR GRUPOS EN EL CODIGO Y PODAMOS IDENTIFICAR NUESTRO TRABAJO//
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm"); ESTO ES CON VARIABLES.

function perimetroCuadrado(lado) {
    return lado * 4; //se le llaman parametros.
}
perimetroCuadrado()

//const perimetroCuadrado = ladocuadrado * 4;
//console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");//

//const areaCuadrado = ladocuadrado * ladocuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado miden: " + areaCuadrado + "cm");
console.groupEnd();

// CODIGO DEL TRIANGULO //
console.group("Triangulo");
//const lodoTriangulo1 = 6;
//const lodoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo" + lodoTriangulo1 + "cm, " + lodoTriangulo2 + "cm, " + baseTriangulo + "cm");
//const alturaTriangulo = 5.5;

function alturaTriangulo(ladoA, ladoB, ladoBase) {
    
}
function alturaTrianguloIsoseles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != tringuloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        //let trianguloPequeñoLadoA;
        const trianguloPequeñoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequeñoLadoBase = trianguloPequeñoLadoA;

        //const trianguloGrandeAltura = trianguloPequeñoLadoA;
        //return trianguloGrandeAltura;

        const trianguloPequeñoLadoBCuadrado = trianguloPequeñoLadoB * trianguloPequeñoLadoB;
        const trianguloPequeñoLadoBaseCuadrado = trianguloPequeñoLadoBase * trianguloPequeñoLadoBase;
        const trianguloPequeñoLadoA = Math.sqrt(trianguloPequeñoLadoBaseCuadrado - trianguloPequeñoLadoBCuadrado);
        
        const trianguloGrandeAltura = trianguloPequeñoLadoA;
        return trianguloGrandeAltura;
    }
}
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

//const perimetroTriangulo = lodoTriangulo1 + lodoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del tringulo es: " + areaTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//CODIGO DEL CIRCULO //
console.group("Circulo");

// Radio //
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro //
function diametroCirculo(radio) {
    return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI //
const PI = 3.1415; //hay una herramienta que se llama MATH en este caso se puede usar Math.PI y da el valor de pi. //
console.log("PI es: " + PI);

// Circunferencia //
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

// Area //
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd();



//Aqui interactuamos con el HTML//

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
}