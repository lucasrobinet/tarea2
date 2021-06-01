abstract class Membresias {
    abstract tipo():string;
    abstract duracion():number;
    abstract anuncios():string;
    abstract precio():number;
    abstract descargas():string;

    public detalles(){
        console.log('Detalles de la suscripcion: ');
        console.log('Tipo : '+this.tipo());
        console.log('Duracion : '+this.duracion()+' '+'Dias');
        console.log('Anuncios : '+this.anuncios());
        console.log('Precio : $'+this.precio())
        console.log('Descargas '+this.descargas())
    }
}

export default Membresias