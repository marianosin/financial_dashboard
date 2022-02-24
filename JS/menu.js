
// // Importo las clases necesarias para construir el dom

import { loginTester } from "./components/loginTester.js";
import { cardConstructor } from "./components/cardConstructor.js";
import { userBarConstructor } from "./components/userBarConstructor.js";

let dashboard = JSON.parse(localStorage.getItem('DASHBOARD_USERS'));


//Testeo si hay sesion activa
loginTester()


//Construyo el menu

$.ajax({
    type: "GET",
    url: "../data/App.json",
    dataType: "json",
    success: function (response) {
        let dashboard = response
        // Inizializo los constructores
        
        cardConstructor(dashboard)
        
    }
});


userBarConstructor(dashboard)