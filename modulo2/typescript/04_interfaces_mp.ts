interface ServicioFunerario {
  id: number;
  nombre: string;
  iniciar(): void;
  realizar(): void;
  finalizar(): void;
}

const servicio1: ServicioFunerario = {
  id: 101,
  nombre: "Servicio Básico",
  iniciar() {
    console.log("El servicio ha iniciado.");
  },
  realizar() {
    console.log("El servicio se está realizando.");
  },
  finalizar() {
    console.log("El servicio ha finalizado.");
  }
};

const servicio2: ServicioFunerario = {
  id: 102,
  nombre: "Servicio Premium",
  iniciar() {
    console.log("El servicio premium ha iniciado.");
  },
  realizar() {
    console.log("El servicio premium está en proceso.");
  },
  finalizar() {
    console.log("El servicio premium ha finalizado con éxito.");
  }
};

servicio1.iniciar();
servicio1.realizar();
servicio1.finalizar();

servicio2.iniciar();
servicio2.realizar();
servicio2.finalizar();
