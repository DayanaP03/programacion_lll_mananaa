interface Usuario {
    id: Number;
    nombre: string;
    correo?: string;

}
const Usuario1: Usuario = {
    id: 12,
    nombre: 'Juan Perez'
}

const Usuario2: Usuario = {
    id: 13,
    nombre: 'Pablo Edison',
    correo: 'pablo@escobar.com'
}

console.log(Usuario1);
console.log(Usuario1.id);
console.log(Usuario1.nombre);
console.log(Usuario1.correo)
console.log(Usuario2);
console.log(Usuario2.id);
console.log(Usuario2.nombre);
console.log(Usuario2.correo);
