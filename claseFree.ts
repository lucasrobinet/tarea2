import Membresias from "./clasePadre"

class Free extends Membresias {
    public tipo(){
        return "Free"
    }
    public duracion(){
        return 15
        }
    public anuncios(){
        return "Si"
    }
    public precio(){
        return 0
    }
    public descargas(){
        return "No"
    }
}

export default Free