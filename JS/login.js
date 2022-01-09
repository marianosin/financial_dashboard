//Usuario modelo
const username = 'mariano'
const password = 'radusky'


//Login funcion para ver si está registrado
function login(username, password) {
    asked_username = prompt("Username")
    asked_password = prompt("Password")

    if ((username==asked_username) && (password==asked_password)){
        return true
    } else {
        return false
    }
}

login = login(username,password)


//Acción en consecuencia del login
if (login == true){
    window.location.href = './menu.html';
} else {
    alert("Usuario y/o contraseña son incorrectos. Inténtelo nuevamente.")
}