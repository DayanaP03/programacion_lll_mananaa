console.log("VARIABLES - FUNERARIA ETERNA MEMORIA  🕊️");

// String
let nombreFuneraria = "Funeraria  Eterna Memoria ";
console.log("Nombre de la Funeraria:", nombreFuneraria);
console.log("Tipo de variable:", typeof(nombreFuneraria));

// Número
let añosDeServicio = 25;
console.log("Años de servicio:", añosDeServicio);
console.log("Tipo de variable:", typeof(añosDeServicio));

// Boolean
let servicioDisponible = true;
console.log("Servicio disponible:", servicioDisponible);
console.log("Tipo de variable:", typeof(servicioDisponible));

// Undefined
let proximoEvento;
console.log("Próximo evento:", proximoEvento);
console.log("Tipo de variable:", typeof(proximoEvento));

// Null
let clienteActual = null;
console.log("Cliente actual:", clienteActual);
console.log("Tipo de variable:", typeof(clienteActual)); // devuelve "object" por curiosidad del lenguaje

// BigInt
let ingresosAnuales = 987654321987654321n;
console.log("Ingresos anuales (estimado):", ingresosAnuales);
console.log("Tipo de variable:", typeof(ingresosAnuales));

// Objeto
let ataud = {
    tipo: "Madera de roble",
    precio: 850.50,
    incluyeFlores: true
};
console.log("Datos del ataúd:", ataud);
console.log("Tipo de variable:", typeof(ataud));

// Arreglo
let servicios = [
    "Cremación",
    "Velatorio",
    "Traslado",
    "Asesoría legal",
    "Acompañamiento familiar"
];
console.log("Servicios disponibles:", servicios);
console.log("Tipo de variable:", typeof(servicios)); // "object", los arrays también son objetos
