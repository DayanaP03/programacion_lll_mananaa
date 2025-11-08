var servicio1 = {
    id: 101,
    nombre: "Servicio Básico",
    iniciar: function () {
        console.log("El servicio ha iniciado.");
    },
    realizar: function () {
        console.log("El servicio se está realizando.");
    },
    finalizar: function () {
        console.log("El servicio ha finalizado.");
    }
};
var servicio2 = {
    id: 102,
    nombre: "Servicio Premium",
    iniciar: function () {
        console.log("El servicio premium ha iniciado.");
    },
    realizar: function () {
        console.log("El servicio premium está en proceso.");
    },
    finalizar: function () {
        console.log("El servicio premium ha finalizado con éxito.");
    }
};
servicio1.iniciar();
servicio1.realizar();
servicio1.finalizar();
servicio2.iniciar();
servicio2.realizar();
servicio2.finalizar();
