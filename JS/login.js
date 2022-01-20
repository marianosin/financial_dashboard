//Variables de sistema
import { DASHBOARD_USERS } from "./components/variables.js";
// Elementos importados 
let dashboard = JSON.parse(localStorage.getItem(DASHBOARD_USERS))
import { saveLS } from "./components/saveLS.js";



// Variables del documento
let loginStatus = ''
// Login elementos 
const inputUsername = document.getElementById('username')
const inputPassword = document.getElementById('password')

//Registro


//Cambio de formulario
const loginBtn = document.getElementById('loginBtn')
const registerLink = document.querySelector('#registerLink')

const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')


// Login
// Chequeo si ya tenía una sesión activa

if (!dashboard.activeSession) {
    
    loginBtn.addEventListener('mousedown', ()=>{
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

