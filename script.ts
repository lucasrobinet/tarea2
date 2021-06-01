import Usuarios from "./users"
import Free from "./claseFree"
import Basic from "./claseBasic"
import Premium from "./clasePremium"




let usuario1 = new Usuarios(1,"Lucas","Robinet",new Premium())


console.log("ID: "+ usuario1.getId())
console.log("Nombre: "+usuario1.getFirstName())
console.log("Apellido : "+usuario1.getLastName())
console.log("Tipo de suscripcion: "+usuario1.getSuscripcion().tipo())
console.log("Duracion: "+usuario1.getSuscripcion().duracion()+" dias")
console.log("Precio: $"+usuario1.getSuscripcion().precio())
console.log("Anuncios : "+usuario1.getSuscripcion().anuncios())
console.log("Descargas : "+usuario1.getSuscripcion().descargas())