import Membresias from "./clasePadre"

class Premium extends Membresias{
    public tipo(){
        return "Premium"
    }
    public duracion(){
        return 30
        }
    public anuncios(){
        return "No"
    }
    public precio(){
        return 9
    }
    public descargas(){
        return "Si"
    }
}

export default Premium