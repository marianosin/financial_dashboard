// Variables de sistema
import { DASHBOARD_USERS } from "./components/variables.js";
let dashboard = JSON.parse(localStorage.getItem(DASHBOARD_USERS))
let listOfUsernames = []
//Importa clase
import {User} from './components/User.js'
import { saveLS } from "./components/saveLS.js";

const registerBtn = document.querySelector('#registerBtn')
const validationMessage = document.querySelector('#validationMessage')
//Genera las variables necesarias
const username = document.querySelector('#registeredUsername')
const password = document.querySelector('#registeredPassword')
const names = document.querySelector('#registeredName')
const lastname = document.querySelector('#registeredLastname')
const age = document.querySelector('#registeredbirthday') //Cómo añado una excepción para que si no es un int vuelva a pedirlo?
const loginLink = document.querySelector('#loginLink')

// Variables de situación
let inUse = listOfUsernames.includes(username.value)
let validPaswword = false

// Compruebo que el usuario no esté en uso

for (let index = 0; index < dashboard.users.length; index++) {
    listOfUsernames.push(dashboard.users[index].username)
}





        
        


username.addEventListener('keyup', ()=>{

    inUse = listOfUsernames.includes(username.value)
    
    if(!inUse){
        username.className = 'form-control greenBackgroundInput'
        c
        
        
        


        
    } 
    if (inUse) {
        username.className = 'form-control redBackgroundInput'
        
    }
})



password.addEventListener('keyup',()=>{

    if (password.value.length<4) {
        password.className = 'form-control redBackgroundInput'
    }
    if (password.value.length>=4) {
        password.className = 'form-control greenBackgroundInput'
        validPaswword = true
    }
})


registerBtn.addEventListener('click', ()=>{
    

    if (names.value != null && lastname.value != null && username.value != null && inUse === false && validPaswword === true) {
        const regiterNewUser = new User(`${names.value} ${lastname.value}`,username.value,password.value, age.value)
        dashboard.users.push(regiterNewUser)

        saveLS(DASHBOARD_USERS,dashboard)
        
        // dashboard.addUser(regiterNewUser)
        validationMessage.className = 'notHiddenForm greenBackgroundInput validationMessage'
        validationMessage.innerHTML = 'Usuario registrado correctamente. Para continuar, de click <a href="./" > aquí</a>'
    } else {
        validationMessage.className = 'notHiddenForm redBackgroundInput validationMessage'
        validationMessage.innerHTML = 'Ocurrió un error. Verifique los datos incorporados en el formulario.'
    
    }


    
})

//Cambios de formularios
loginLink.addEventListener('click', ()=>{
    
    if (loginForm.className === 'container hiddenForm') {
        loginForm.className = 'container notHiddenForm';
        registerForm.className = 'container hiddenForm';
        validationMessage.className = 'hiddenForm '

    } else {
        validationMessage.className = 'hiddenForm'
        loginForm.className = 'container hiddenForm';
        registerForm.className = 'container notHiddenForm';
    }


})
