
var windowH;

$(document).ready(function() {
    
    displayFoldIndicator();
    
    $( "#show_sidebar" ).click(function(e) {
        
        e.preventDefault();
        
        $( "body" ).toggleClass("dev-sidebar");
    
        if($('body').hasClass('dev-sidebar')) {
            
            // show the sidebar
            $("#dev_sidebar").animate({right:'0'}, 300);
            $("body").animate({marginRight:'300px'}, 300); 
            
            // move labels over
            $("#dev_device").animate({right:'310px'}, 300);
            $("#dev_viewport").animate({right:'300px'}, 300);
                
        } else {
            
            // hide sidebar
            $("#dev_sidebar").animate({right:'-300px'}, 300);
            $("body").animate({marginRight:'0'}, 300); 
            
            // move labels back
            $("#dev_device").animate({right:'10px'}, 300);
            $("#dev_viewport").animate({right:'0'}, 300);
        }
        

    });
        
});

$( window ).resize(function() {
    displayFoldIndicator();
});

function displayFoldIndicator() {
    windowH = $(window).height();
    $('#dev_viewport').css('top', windowH -2);
}