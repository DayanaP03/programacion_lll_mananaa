
//funcion basica
function saludar(nombre?: string):string {
    return `Hola ${nombre}`;
}
 console.log(saludar('Francisco'));


 //duncionflecha
const sumar= (a:number, b:number):number => {
    return a + b;
}
console.log(sumar(5,5));

function saludarDenuevo(): void{
    console.log(`Hola`);
    console.log(`Bienvenido a TypeScript`);
}


saludarDenuevo();


function calcularAreaCiculo(radio: number): number{
    return Math.PI * radio * radio;
}


function calcularAreaCiculoVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaCiculo(5));
calcularAreaCiculoVoid(7);