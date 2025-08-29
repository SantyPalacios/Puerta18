class SerVivo {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  alimentarse() {
    console.log(`${this.nombre} se está alimentando de alguna forma...`);
  }
}

class Animal extends SerVivo {
  alimentarse() {
    console.log(`${this.nombre} está comiendo.`);

 }
}

const gato = new Animal ("cloe", 9)
console.log (`el nombre del mi gata es: ${gato.nombre}`)
gato.alimentarse (  )