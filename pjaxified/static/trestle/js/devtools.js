
var windowH;

$(document).ready(function() {
    
    displayFoldIndicator();
    //generateAnnotations();
    
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
            
            $(this).text("hide projectbar")
                
        } else {
            
            // hide sidebar
            $("#dev_sidebar").animate({right:'-300px'}, 300);
            $("body").animate({marginRight:'0'}, 300); 
            
            // move labels back
            $("#dev_device").animate({right:'10px'}, 300);
            $("#dev_viewport").animate({right:'0'}, 300);
            
            $(this).text("show projectbar")
            
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




// Metaframe is an easy-to-use notation layer for conveying the meta-knowledge in wireframes, mockups, and design comps. Made and shared with love by the folks at Elliance. 
// Copyright 2013 Elliance, Inc. - Creative Commons Attribution Sharealike 3.0 Unported http://creativecommons.org/licenses/by-sa/3.0/

function generateAnnotations() {
    
    console.log("annotations generated");
    
    // Generate Notes Panel static Content
    var structure = [];

    //$(structure.join('')).appendTo('.notes');
    
    $('.notes').html(structure);

    // Generate Note From Element
    var noteCount = 0;
    
    var tn_array = $(".dev-annotate").map(function() {
        noteCount++;
        return $(this).attr("spec");
    });

    // Auto-numbering the notes    
    for (var i = 0; i < noteCount - 0; i++) {
        $('.notes').append('<div class="note-holder">' + '<span class="note-count">' + (i+1) + '</span>' +'<span class="note-body">' + tn_array[i] + '</span>' + '</div');
        }

    //metaframe_embed_comments();
    
    // add HTML to classes marked with .notation
    var noteNum = 0;
    
    $('.dev-annotate').each(function() {
        noteNum++;
        
        // check to see if anchor has already been generated.. if not, make one!
        if (!$(this).find('.dev-notes-anchor').length != 0) {
            $(this).prepend('<span class="dev-notes-anchor">' + (noteNum) +'</span>');
        }

    });
    
}