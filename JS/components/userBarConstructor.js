

function userBarConstructor(dashboard) {
    
    // Conecto con la barra para rellenarla de info
    const userBar = document.querySelector('#userBar')
//Lo que me gustaría es que el nombre del usuario salga en bold, ¿cómo lo haría?
    userBar.innerHTML = `Bienvenido <span id="userNameBar">${dashboard.users[0].fullName}!</span> <input type="button" class="loadOPBtn" value="Cargar operación">` 
    

}

export {userBarConstructor}