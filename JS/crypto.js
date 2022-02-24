import { userBarConstructor } from "./components/userBarConstructor.js";
import { loginTester } from "./components/loginTester.js";
import {sideMenu} from "./components/sideMenu.js"
import { titleBuilder } from "./components/titleBuilder.js";
//Defino variable dashboard
let dashboard = JSON.parse(localStorage.getItem('DASHBOARD_USERS'))

//Construyo funcionalidades 
userBarConstructor(dashboard)
sideMenu()
titleBuilder(dashboard,0)

//Test login
loginTester()


// Conecta con API
let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch( e => console.log(e))

const mostrarData = (data)=>{
    // console.log(data)
    let body = ''
    for (let i = 0; i< data.length; i++){
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}



