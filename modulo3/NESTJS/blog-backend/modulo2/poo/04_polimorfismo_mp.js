class EmpleadoFuneraria {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} está atendiendo a las familias en la funeraria...`);
    }

    calcularVacaciones() {
        return this.salario * 0.10;
    }

    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class ConductorCarroza extends EmpleadoFuneraria {
    calcularVacaciones() {
        return this.salario * 0.12;
    }

    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Florista extends EmpleadoFuneraria {
    calcularVacaciones() {
        return this.salario * 0.08;
    }
}

// Ejemplo de uso
const conductorLuis = new ConductorCarroza('Luis', 1500);
const floristaAna = new Florista('Ana', 1000);

conductorLuis.trabajar();
floristaAna.trabajar();

console.log("Vacaciones Luis:", conductorLuis.calcularVacaciones());
console.log("Vacaciones Ana:", floristaAna.calcularVacaciones());
console.log("Horas extras Luis (4h):", conductorLuis.horasExtras(4));
console.log("Horas extras Ana (3h):", floristaAna.horasExtras(3));
