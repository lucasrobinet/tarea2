import Membresias from "./clasePadre"

class Basic extends Membresias{
    public tipo(){
        return "Basic"
    }
    public duracion(){
        return 30
        }
    public anuncios(){
        return "No"
    }
    public precio(){
        return 3
    }
    public descargas(){
        return "No"
    }
}

export default Basic