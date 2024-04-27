class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if (this.integrantes.every(i => i.instrumento !== "Bateria")) {
            this.integrantes.push(integranteNuevo);
        } else {
            console.log("Ya no hay Integrantes");
        }
    }
}

class Integrante {
    constructor({nombre, instrumento}) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
} 

export {
    Banda,
    Integrante,
}