let DASHBOARD_USERS = ''

import { App } from "./components/App.js";
import { User } from "./components/User.js";


function login(username, password) {
    let asked_username = prompt("Username")
    let asked_password = prompt("Password")

    if ((username==asked_username) && (password==asked_password)){
        return true
    } else {
        return false
    }
}

let tempList = JSON.parse(localStorage.getItem(DASHBOARD_USERS))
console.log(tempList)

if (tempList == null || tempList == undefined){
    // Inicializo la app

    const dashboard = new App()

    // Creo un usuario modelo 
    const user1 = new User('Mariano Radusky','mradusky', 'Radusky', '1993-07-19')

    dashboard.addUser(user1)

    console.log('Estoy en el if')

    localStorage.setItem(DASHBOARD_USERS,JSON.stringify(dashboard));


}else{
    console.log('Estoy en el else')
    let dashboard = tempList





    
}


let login_status = login(dashboard.users[0].username,dashboard.users[0].password)

console.log(login_status)

//Acción en consecuencia del login
if (login_status === true){
    window.location.href = './menu.html';
} else {
    alert("Usuario y/o contraseña son incorrectos. Inténtelo nuevamente.")
    window.location.href = './?'
}