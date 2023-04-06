// EJERCICIO 1 y 2 - Cálculo IVA y precio total

const product = { count: 3, price: 12.55, type: "ropa" };

let vat;

switch (product.type) {
    case "alimentación": vat = 0.1;
    break;
    case "libro": vat = 0.04;
    break;
    default: vat = 0.21;
    break;
};

if (product.count < 0) {
    product.count = 0;
    totalMid = product.count * product.price;
} else {
    totalMid = product.count * product.price;
;}

totalComplete = totalMid + totalMid * vat;

console.log("El precio es ", totalComplete, " €");

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");

// EJERCICIO EXTRA
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

let retencion;

if (empleado.bruto < 12000){
    retencion = 0;
} else if (empleado.bruto < 24000) {
    retencion = 8;
} else if (empleado.bruto < 34000) {
    retencion = 16;
} else if (empleado.bruto > 34000) {
    retencion = 30;
};

/* C O M E N T A R I O
He intentado aplicar switch para la retención pero no sé por qué me da undefined en la consola

switch (retencion) {
    case (empleado.bruto < 12000): retencion = 0;
    break;
    case (empleado.bruto < 24000): retencion = 8;
    break;
    case (empleado.bruto < 34000): retencion = 16;
    break;
    case (empleado.bruto > 34000): retencion = 30;
    break;
};
*/

console.log("La retención es del ", retencion, "%");

// Retención en caso de que tenga hijos
if (empleado.hijos > 0) {
    retencion = retencion - 2;
    console.log("Al tener ", empleado.hijos, "hijos, se aplica una retención del ", retencion, "%" );
};

// Neto anual
let netoAnual = empleado.bruto - ((empleado.bruto * retencion) / 100);

console.log("El sueldo neto anual es de ",netoAnual, "€");

// Neto mensual
let netoMensual = netoAnual / empleado.pagas;

console.log("El sueldo neto mensual es de ",netoMensual, "€");