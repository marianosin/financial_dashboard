

function userBarConstructor(dashboard) {
    
    // Conecto con la barra para rellenarla de info
    const userBar = document.querySelector('#userBar')

    //conecto con el body
    let bodyEdited = document.getElementById('editableElement')

    userBar.innerHTML = `Bienvenido <span class="userNameBar">${dashboard.users[0].fullName}!</span>` 
    
    //Creo un elemento y lo añado a la barra

    let loadOPBtn = document.createElement('input')
    loadOPBtn.type = 'button'
    loadOPBtn.className = 'loadOPBtn'
    loadOPBtn.value = 'Cargar operación'


    //Lo incorporo a la barra.
    userBar.appendChild(loadOPBtn)
    loadOPBtn.addEventListener('click', ()=>{
        console.log('Dio click, va a cargar una op')

        //creo el elemento contenedor del formulario y que sraá el fondo
        if (bodyEdited.className != 'loadOPBtn__dargBG') {
            bodyEdited.className = 'loadOPBtn__dargBG'
        
            //Creo un botón con la función de cerrar el emergente
            let closeBtn = document.createElement('input')
            closeBtn.className = 'btn float-right loadOPBtn__closeSimulationBtn'
            closeBtn.value = 'Cancelar simulación'

            //Creo todos los elementos del simulador
            let simulatorContainer = document.createElement('div')
            simulatorContainer.className = 'container'
            let simulatorBox = document.createElement('div')
            simulatorBox.className = 'd-flex justify-content-center h-100'
            let simulatorCard = document.createElement('div')
            simulatorCard.className = 'card'
            let simulatorHeader = document.createElement('div')
            simulatorHeader.className = 'card-header loginCardHeaderStyle'
            simulatorHeader.innerHTML = '<h1>Simular una compra estándar</h1>'
            let simulatorBody = document.createElement('div')
            simulatorBody.className = 'card-body'
            let simulatorForm = document.createElement('form')
            simulatorForm.onsubmit="return false"
            let simulatorInputGroup = document.createElement('div')
            simulatorInputGroup.className = 'input-group form-group'
            let simulatorPrepend = document.createElement('div')
            simulatorPrepend.className = 'input-group-prepend'
            simulatorPrepend.innerHTML = '<span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>'
            let simulatorInputText = document.createElement('input')
            simulatorInputText.type = 'number'
            simulatorInputText.className = 'form-control'
            simulatorInputText.id = 'simulatorAmmount'
            simulatorInputText.placeholder = 'Monto a simular'
            let simulatorButtonGroup = document.createElement('div')
            simulatorButtonGroup.className = 'input-group form-group'
            let simulateBtn =document.createElement('input')
            simulateBtn.className = 'btn float-right'
            simulateBtn.type = 'button'
            simulateBtn.value = 'Simular'
            simulateBtn.id = 'simulateCommissionsBtn'
            simulateBtn.prev
            let simulatorResults = document.createElement('div')


            //lo añado al contenedor
            bodyEdited.appendChild(simulatorContainer)
            simulatorContainer.appendChild(simulatorBox)
            simulatorBox.appendChild(simulatorCard)
            simulatorCard.appendChild(simulatorHeader)
            simulatorCard.appendChild(simulatorBody)
            simulatorBody.appendChild(simulatorForm)
            simulatorForm.appendChild(simulatorInputGroup)
            simulatorInputGroup.appendChild(simulatorPrepend)
            simulatorInputGroup.appendChild(simulatorInputText)
            simulatorForm.appendChild(simulatorButtonGroup)
            simulatorButtonGroup.appendChild(simulateBtn)
            simulatorButtonGroup.appendChild(closeBtn)

            //Obtengo elemento boton simular para añadir accion

            simulateBtn.addEventListener('click', ()=>{
                simulatorInputText.value

                if (simulatorInputText.value > 0) {
                    let ammount = simulatorInputText.value
                    simulatorResults.textContent = `Si usted invierte $ ${ammount} pesos. Sus comisiones serán de $ ${ammount*0.0075} (0.75%), lo que significa que usted se gastará $ ${ammount*1.0075}.`
                    simulatorBody.appendChild(simulatorResults)
                } else {
                    simulatorResults.textContent = `Debe introducir un valor mayor a cero`
                    simulatorBody.appendChild(simulatorResults)
                }

                })

            //Elimino las cosas
            closeBtn.addEventListener('click',()=>{
                bodyEdited.className = ''
                bodyEdited.removeChild(simulatorContainer)
                simulatorContainer.removeChild(simulatorBox)
                simulatorBox.removeChild(simulatorCard)
                simulatorCard.removeChild(simulatorHeader)
                simulatorCard.removeChild(simulatorBody)
                simulatorBody.removeChild(simulatorForm)
                simulatorForm.removeChild(simulatorInputGroup)
                simulatorInputGroup.removeChild(simulatorPrepend)
                simulatorInputGroup.removeChild(simulatorInputText)
                simulatorForm.removeChild(simulatorButtonGroup)
                simulatorButtonGroup.removeChild(simulateBtn)
                simulatorButtonGroup.removeChild(closeBtn)
            })
            
        }
        

        
    })

}

export {userBarConstructor}