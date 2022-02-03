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
import { userBarConstructor } from "./components/userBarConstructor.js";




let dashboard = testLog
// Inizializo los constructores
headerConstructor()

userBarConstructor(dashboard)


// Empiezo a modificar la tabla de historial

dashboard.users[0].opHistory.map((element)=>{
    $( `<tr class="inputHistory" ><td>${element.opId}</td><td>${element.ticker}</td><td>${element.netAmmount}</td><td>${element.price}</td><td>${element.quantity}</td><td>${element.commission}</td><td>${element.totalAmmount}</td><td>${element.exchange}</td><td>${element.eqType}</td><td>${element.currency}</td><td>${element.dateOperated}</td></tr>` ).appendTo( "#historyTableBody" );
    console.log(element)
})
$('.backToMenu').click(function (e) { 
    e.preventDefault();
    $(this).addClass('hidden')
    $('.backToMenuClose').removeClass('hidden')
    $('#nav').animate({width: "200px", fontSize: '26px'}, 1500);
    
});
$('.backToMenuClose').click(function (e) { 
    e.preventDefault();
    $('.backToMenu').removeClass('hidden')
    $(this).addClass('hidden')

    $('#nav').animate({width: "0px", fontSize: '0px'},1000);
});
