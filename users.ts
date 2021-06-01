import Membresias from "./clasePadre"


class Usuarios{
    private id : number
    private firstName : string
    private lastName : string
    private suscripcion : Membresias

    constructor(id: number, fname: string, lname: string, sub: Membresias){
        this.id = id
        this.firstName = fname
        this.lastName = lname
        this.suscripcion = sub
    }
    //setters
    setId(id: number){
        this.id = id
    }

    setFirstName(fname: string){
        this.firstName = fname
    }

    setLastName(lname: string){
        this.lastName = lname
    }

    setSuscripcion(sub: Membresias){
        this.suscripcion = sub
    }

    //getters
    getId(): number {
        return this.id
    }

    getFirstName():string{
        return this.firstName
    }

    getLastName():string{
        return this.lastName
    }

    getSuscripcion():Membresias{
        return this.suscripcion
    }
}

export default Usuarios
