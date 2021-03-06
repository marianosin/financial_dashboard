//Variables de sistema
import { DASHBOARD_USERS } from "./components/variables.js";
// Elementos importados 
let dashboard = JSON.parse(localStorage.getItem(DASHBOARD_USERS))
import { saveLS } from "./components/saveLS.js";



// Variables del documento
let loginStatus = false
let loginPosition = 0
// Login elementos 
const inputUsername = document.getElementById('username')
const inputPassword = document.getElementById('password')
const validationMessage = document.querySelector('#validationMessage')
//Registro


//Cambio de formulario
const loginBtn = document.getElementById('loginBtn')
const registerLink = document.querySelector('#registerLink')

const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')


// Login
// Chequeo si ya tenía una sesión activa
$(document).ready(function () {
        
    if (!dashboard.activeSession) {
        
        loginBtn.addEventListener('mousedown', ()=>{
            // Si el dato del usuario coincide con lo que se toma de los inputs
            
            let userList = []
            dashboard.users.map((element)=>{
                userList.push([element.username, element.password])
            })

            for (let i = 0; i < userList.length; i++) {
                const loggedUser = userList[i];
                if ((loggedUser[0]=== inputUsername.value ) && (loggedUser[1] === inputPassword.value)) {
                    
                    loginStatus = true //Cambio el estado de la sesión a activa
                    loginPosition = i
                    dashboard.activeUser = loggedUser[0]
                    
                    dashboard.activeUserPosition = loginPosition
                    // Actualiza localStorage
                    dashboard.activeSession = loginStatus
                    saveLS(DASHBOARD_USERS,dashboard)
              
        
                    window.location = './menu/'
                    
                    }            
            }
            if (loginStatus === false) {
                validationMessage.className = 'notHiddenForm redBackgroundInput validationMessage'
                validationMessage.innerHTML = 'Ocurrió un error. Verifique los datos incorporados en el formulario.'
                
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

});
