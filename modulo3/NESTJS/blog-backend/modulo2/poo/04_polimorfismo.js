class Empleado {
    constructor(nombre, salario){
        this.nombre = nombre;
        
    }
    trabajar(){
            console.log("empeleado trabajando ...")
    }
    calcularVacaciones(){
        this.salario * 0.15;
    }

    horasExtras(horas){
        return((this.salario/30)/8)* horas*2;
    }  
}

class Programador extends Empleado{
    calcularVaciones(){
        return this.salario * 0.20;
    }
    
    horasExtras(horas){
        return((this.salario/30)/8)* horas*3;
    }

}
class Diseñardor extends Empleado{
    calcularVacaciones(){
        return this.salario * 0.10;
    }

}



const progPedro= new Programador('Pedro', 2000);
const diseJuan= new Diseñardor('Juan', 1200);
progPedro.trabajar();
diseJuan.trabajar();
console.log(progPedro.calcularVacaciones());
console.log(diseJuan.calcularVacaciones());
console.log(progPedro.horasExtras(5));
console.log(diseJuan.horasExtras(4));

