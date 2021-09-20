$(document).ready(function() {
    // Header y footer
    alert('gf')
    $('header').load('header.html');
    $('footer').load('footer.html');

    //Menu
    if (window.matchMedia('(max-width: 991px)').matches) {
        jQuery(document).on("click","li.dropdown-h > a",function(e){    
            e.preventDefault();    
            $(this).parent().toggleClass('show');            
        }); 
        jQuery(document).on("click","li.dropdown > a",function(e){   
            e.preventDefault();   
            $(this).parent().toggleClass('show');
        }); 
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
         jQuery(document).on("click","li.dropdown > a",function(){
            let show = true;    
            if($(this).parent().hasClass('show')){
                show = false;
            }       
            $('.dropdown.show').removeClass('show')
            if(show){
                $(this).parent().addClass('show');
            }
            else{
                $(this).parent().removeClass('show');
            }
        }); 
    }    

    // Tamaño grid img
    var cw1 = $('.hsec1 .grid-item img').width();
    $('.hsec1 .grid-item img').css({'height':cw1+'px'});

    var cw2 = $('.actua-1 .grid-item img').height();
    cw2 = (cw2 / 3) - 6.4;
    $('.actua-2 .grid-item img').css({'height':cw2+'px'});

    // Cargar más home
    $('.cargar i').click(function(){
        $('.hsec1 .grid-item').removeClass('d-none');
        $('.facsec2 .grid-item').removeClass('d-none');
    });    
});

// Menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "") {
        x.className += " responsive ";
    } else {
        x.className = "topnav ";
    }
}