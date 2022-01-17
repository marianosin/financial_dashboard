

function userBarConstructor(dashboard) {
    
    // Conecto con la barra para rellenarla de info
    const userBar = document.querySelector('#userBar')
    const userName = document.createElement('span')
    userName.className = 'userNameBar'
    userName.textContent = dashboard.users[0].fullName //Lo que me gustaría es que el nombre del usuario salga en bold, ¿cómo lo haría?
    userBar.textContent = `Bienvenido ${userName.textContent}. En breve esta barra se habilitará con el usuario logeado y habilitará un botón para cargar operaciones financieras`
}

export {userBarConstructor}