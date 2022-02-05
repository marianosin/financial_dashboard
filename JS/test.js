let dashboard = $.ajax({
    type: "POST",
    url: "../data/App.json",
    dataType: "json",
    success: function (response) {
        $('body').append(`<p>${JSON.stringify(response.appInfo)}</p>`);
    }
});

// console.log(dashboard)