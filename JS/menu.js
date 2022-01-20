//Testeo si hay sesion activa
import { DASHBOARD_USERS } from "./components/variables.js";
let testLog = JSON.parse(localStorage.getItem(DASHBOARD_USERS))

if (testLog != null) {
    if (!testLog.activeSession) {
        window.location.href= '../'
    }
    
}
if (testLog === null) {
    window.location.href = '../'
}


// // Importo las clases necesarias para construir el dom
import { headerConstructor } from "./components/headerConstructor.js";
import { cardConstructor } from "./components/cardConstructor.js";
import { userBarConstructor } from "./components/userBarConstructor.js";




let dashboard = testLog
// Inizializo los constructores
headerConstructor()
cardConstructor(dashboard)
userBarConstructor(dashboard)