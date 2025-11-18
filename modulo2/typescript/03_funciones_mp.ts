
function despedir(nombre?: string): string {
    return `Descansa en paz, ${nombre}`;
}
console.log(despedir('María Pérez'));

const calcularCosto = (ataud: number, cremacion: number): number => {
    return ataud + cremacion;
}
console.log(`Costo total del servicio: $${calcularCosto(800, 300)}`);

function mensajeFuneraria(): void {
    console.log(`Bienvenido a la Funeraria Eterna Memoria 🕊️`);
    console.log(`Estamos aquí para acompañarlo en sus momentos difíciles.`);
}
mensajeFuneraria();


function calcularAreaSepultura(radio: number): number {
    return Math.PI * radio * radio;
}

// Versión con salida directa en consola
function calcularAreaSepulturaVoid(radio: number): void {
    console.log(`Área del terreno para sepultura: ${(Math.PI * radio * radio).toFixed(2)} m²`);
}

console.log(`Área calculada: ${calcularAreaSepultura(4).toFixed(2)} m²`);
calcularAreaSepulturaVoid(5);
