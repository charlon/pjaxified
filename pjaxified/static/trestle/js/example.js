var processing_badges = false;
var pathname;

// document.ready shorthand
$(function() {
    
    // identify what type of hyperlinks are pjax-able
    $(document).pjax('a[data-pjax]', '#pjax-container',  {timeout: 10000})
     
    $('#pjax-container').on("pjax:send", function(e) {
        
        // if PJAX is taking longer than 250ms... show the loading message & hide existing content
        loadingTimeout = setTimeout(function() {
            $("#pjax-loading").show();
            $('#pjax-container').hide();
        }, 250);
              
    });
    

    $('#pjax-container').on("pjax:complete", function() {
                
        // once pjax completes... hide the loading message and make sure the content is showing    
                
        $("#pjax-loading").hide();
        $('#pjax-container').show();
        
        // handle url routes
        handleRoutes();

        // cancel showing the message when the ajax call completes.
        clearTimeout(loadingTimeout);
        
    });
        
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });

    
}); 


// ### GLOBAL LOAD EVENT (pjax fallback) ###############
$(window).load(handleRoutes);

// ### GLOBAL SCROLLING EVENT (pjax and non-pjax scrolling )###############
$(window).scroll(function() {
    
    pathname = window.location.pathname;
    
    // if on "badges" page
    if(pathname.indexOf("/badges/") >= 0) {
                        
        // if scrolled to the bottom... AND currently not processing any badge requests (bounce hack)
        if($(window).scrollTop() + $(window).height() == $(document).height() && !processing_badges) {
            
            console.log("you scrolled to the bottom");    
            //loadBadgeList();                 
        }
        
    }
    
});



function handleRoutes(jQuery) {
    
    // ROUTING FOR PJAX
    pathname = window.location.pathname;
        
    // if on "badges" page
    if(pathname.indexOf("/badges/") >= 0) {
              
       loadBadgeList(); 
    }
}

// HANDLEBARS FUNCTIONS

function loadBadgeList(url) {
    
    var protocol = window.location.protocol;
    var host = window.location.host;
    var last_index;
    
    last_index = $('#badge_list').attr("data-last");
    
    console.log(last_index);
     
    url = protocol + '//' + host + '/api/v1/badges?format=json'
            
    // make an ajax request for the badgelist partial    
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend:function(){
                        
            // show the badge loading spinner
            $("#badge_list_loading").show();
            
        },    
        success:function(data){
            
            // exclude data that was originally printed
            data.splice(0, last_index); 
                                    
            var context = { badges: data };
                            
            // compile handlebars template and render
            var template = Handlebars.compile($('#tpl-badge-list').html()),
                rendered = template(context);
                                            
            // paint it in the badge list container
            $("#badge_list").append(rendered);
                          
            // hide the badge loading spinner
            $("#badge_list_loading").hide();
            
        },
        error:function() {
            console.log("error fetching json...");
        }
    });
    
}