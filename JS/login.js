//Variables de sistema
let DASHBOARD_USERS = 'DASHBOARD_USERS' //Variable de localstorage
let dashboard = '' //variable temporal para ser editada despues por if
let loginStatus = ''



// Variables del documento

// Login elementos 
const inputUsername = document.getElementById('username')
const inputPassword = document.getElementById('password')

//Registro

const 

//Cambio de formulario
const loginBtn = document.getElementById('loginBtn')
const registerLink = document.querySelector('#registerLink')
const loginLink = document.querySelector('#loginLink')
const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')

// Elementos importados 
import { App } from "./components/App.js";
import { User } from "./components/User.js";
import { saveLS } from "./components/saveLS.js";



// Obtengo el dato del localStorage
let tempList = JSON.parse(localStorage.getItem(DASHBOARD_USERS))
console.log(tempList)

if (tempList == null || tempList == undefined){
    // Inicializo la app en caso de que no exista

    dashboard = new App(false)

    // Creo un usuario modelo 
    const user1 = new User('Mariano Radusky','mradusky', 'Radusky', '1993-07-19')

    dashboard.addUser(user1)

    console.log('No existía info y fue creada')

    localStorage.setItem(DASHBOARD_USERS,JSON.stringify(dashboard));
    console.log(dashboard)

}else{
    console.log('Existe info y ya fue tomada.')
    dashboard = tempList
}

// Login
// Chequeo si ya tenía una sesión activa

if (!dashboard.activeSession) {
    
    loginBtn.addEventListener('click', ()=>{
        // Si el dato del usuario coincide con lo que se toma de los inputs
        
        if ((dashboard.users[0].username === inputUsername.value ) && (dashboard.users[0].password === inputPassword.value)) {
            console.log(inputUsername.value)
            console.log(inputPassword.value)
            console.log('Ingreso correcto.')
            loginStatus = true //Cambio el estado de la sesión a activa
            // Actualiza localStorage
            dashboard.activeSession = loginStatus
            saveLS(DASHBOARD_USERS,dashboard)
            console.log('dio click y se guardó el elemento')
            console.log(JSON.parse(localStorage.getItem(DASHBOARD_USERS)))
            //Acción en consecuencia del login
            console.log(dashboard.users)

            window.location = './menu/'
            } else {
                console.log(inputUsername.value)
                console.log(inputPassword.value)
                alert('Usuario y/o contraseña son incorrectos. Inténtelo nuevamente.')
                window.location = './?'
            }
    })
    

} else {
    window.location = './menu/'
}

// Registro de usuario




// Cambios entre formulario de acceso y registro

registerLink.addEventListener('click', ()=>{
    
    if (loginForm.className === 'container hiddenForm') {
        loginForm.className = 'container notHiddenForm';
        registerForm.className = 'container hiddenForm';
    } else {
        loginForm.className = 'container hiddenForm';
        registerForm.className = 'container notHiddenForm';
    }


})


loginLink.addEventListener('click', ()=>{
    
    if (loginForm.className === 'container hiddenForm') {
        loginForm.className = 'container notHiddenForm';
        registerForm.className = 'container hiddenForm';
    } else {
        loginForm.className = 'container hiddenForm';
        registerForm.className = 'container notHiddenForm';
    }


})