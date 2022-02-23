
function sideMenu() {
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
}

export {sideMenu}