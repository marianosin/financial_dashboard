
// Clase usuer. Esta clase recolecta los datos del usuario para su posterior uso

class user{
    // Contiene todo lo relacionado a las acciones que puede realizar unusuario 
    constructor(username, password, name, lastname, age, mainInterest){
        // Presenta los atributos del objeto user
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.mainInterest = mainInterest;
        // this.profilePicture = "this.profilePicture link" //Posteriormente
        this.simulatedOpHistory = [] //Esta lista irá almacenando un historial de simulaciones que haya hecho el usuario
    }
    //Método para evaluar la identidad del usuario
    login() {
        // Comprueba que el usuario registrado y el que está operando sean el mismo
        this.asked_username = prompt("Username");
        this.asked_password = prompt("Password");
    
        if ((this.username==this.asked_username) && (this.password==this.asked_password)){
            return true
        } else {
            return false
        }
    }


    //Métodos para simular una operación de compra y venta de activos financieros
    opType() {
        // Registra el tipo de operaciones que desea simular el usuario. Compea o venra
        //Sirve lo mismo para fci, compra == suscripción y venta == rescate
        this.op = prompt("¿Compra o venta?")
        if (this.op.toLowerCase()=='compra'){
            return true
        } 
        if (this.op.toLowerCase()=="venta") {
            return false
        }
    }

    //Función para cargar una operación al historial de operaciones reales que haga el usuario
    //Función que añada a favoritos un activo financiero
}

export {user}