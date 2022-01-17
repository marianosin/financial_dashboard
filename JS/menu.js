
// Importo las clases necesarias para construir el dom
import {App} from './components/App.js'
import { User } from "./components/User.js";
import { Sections} from './components/Sections.js';
import { headerConstructor } from "./components/headerConstructor.js";
import { cardConstructor } from "./components/cardConstructor.js";
import { userBarConstructor } from "./components/userBarConstructor.js";
// Creo la aplicacion
const dashboard = new App()


// Creo un usuario de testeo
const testUser = new User('Mariano Radusky', 'mariano', 'radusky', '1993-07-19')

dashboard.addUser(testUser)



// Creo las 4 primeras secciones

let stocks = new Sections('Mercado de acciones', 'Acciones', './#')
let bonds = new Sections('Mercado de bonos', 'Bonos', './#')
let crypto = new Sections('Mercado de crypto', 'Cryptos', './#')

dashboard.addSection(stocks)
dashboard.addSection(bonds)
dashboard.addSection(crypto)


// Funcion para inicializar y mostrar en dom


// Inizializo los constructores
headerConstructor()
cardConstructor(dashboard)
userBarConstructor(dashboard)