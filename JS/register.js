//Importa clase
import {user} from './components/userOpbject.js'
//Genera las variables necesarias
const username = prompt("Defina un usuario");
const password = prompt("Defina una contraseña");
const names = prompt("Su nombre");
const lastname = prompt("Apellido");
const age = parseInt(prompt("Su edad (con números)")); //Cómo añado una excepción para que si no es un int vuelva a pedirlo?
const mainInterest = prompt("Su mercado de interés");



//Crea usuario ejemplo
const user1 = new user(username, password, names, lastname, age, mainInterest)

// Se testea que haya sido instroducido correctamente los atos

console.log(user1)
let correctRegistration = true
for (let key in user1) {
    console.log(key, user1[key]);
    if ((user1[key]===null) || (user1[key]==='')) {
        correctRegistration = false
        
    }
}
// Mensaje de advertencia 
if (correctRegistration === true){
    alert("Su usuario fue creado correctamente.")
} else {
    alert("Debe completar todos los campos correctamente. Recuerde introducir números en su edad.")
}

