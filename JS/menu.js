
$.ajax({
    type: "GET",
    url: "../data/App.json",
    dataType: "json",
    success: function (response) {
        let testLog = response

        if (testLog != null) {
            if (!testLog.activeSession) {
                window.location.href= '../'
            }
            
        }
        if (testLog === null) {
            window.location.href = '../'
        }
    }
});


// // Importo las clases necesarias para construir el dom
import { headerConstructor } from "./components/headerConstructor.js";
import { cardConstructor } from "./components/cardConstructor.js";
import { userBarConstructor } from "./components/userBarConstructor.js";



$.ajax({
    type: "GET",
    url: "../data/App.json",
    dataType: "json",
    success: function (response) {
        let dashboard = response
        // Inizializo los constructores
        headerConstructor()
        cardConstructor(dashboard)
        userBarConstructor(dashboard)
    }
});

