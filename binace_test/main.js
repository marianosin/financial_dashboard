// // Coneccion a api
// let endpoint = 'https://api.binance.com/api/v3/ticker/price'
// // Recive promess
// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => mostrarData(data))
//     .catch( e => console.log(e))

// const mostrarData = (data)=>{
//     // console.log(data)
//     let body = ''
//     for (let i = 0; i< data.length; i++){
//         body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
//     }
//     document.getElementById('data').innerHTML = body
// }

let testlist = [1,3,5,6]

testlist.map((element, index)=>{
    console.log(element, index)
    if (index === 2) {
        testlist[index] = 'Hola'
        console.log('Cambio de elemento', element, index)
    }
    
})
console.log(testlist)