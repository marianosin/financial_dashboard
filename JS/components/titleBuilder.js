function titleBuilder(dashboard, sectionPositionInJSON) {
    
    $.ajax({
        type: "GET",
        url: "../data/App.json",
        dataType: "json",
        success: function (response) {
            let data = response
            // Inizializo los constructores
            
            document.title = data.sections[sectionPositionInJSON].pageTitle + `${dashboard.activeUser} `
            
        }
    });

}

export {titleBuilder}