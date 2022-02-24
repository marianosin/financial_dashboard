
// // Importo las clases necesarias para construir el dom
import { userBarConstructor } from "./components/userBarConstructor.js";
import {titleBuilder} from "./components/titleBuilder.js"
import { loginTester } from "./components/loginTester.js";
import {sideMenu} from "./components/sideMenu.js"


//Testeo si hay sesion activa

let testLog = loginTester()


let dashboard = testLog
// Inizializo los constructores

userBarConstructor(dashboard)

sideMenu()

titleBuilder(dashboard,1)

// Empiezo a modificar la tabla de historial

dashboard.users[dashboard.activeUserPosition].opHistory.map((element)=>{
    $( `<tr class="inputHistory" ><td>${element.opId}</td><td>${element.ticker}</td><td>${element.netAmmount}</td><td>${element.price}</td><td>${element.quantity}</td><td>${element.commission}</td><td>${element.totalAmmount}</td><td>${element.exchange}</td><td>${element.eqType}</td><td>${element.currency}</td><td>${element.dateOperated}</td></tr>` ).appendTo( "#historyTableBody" );
    console.log(element)
})



