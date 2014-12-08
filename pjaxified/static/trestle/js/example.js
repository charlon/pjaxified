// document.ready shorthand
$(function() {
    
    // identify what type of hyperlinks are pjax-able
    $(document).pjax('a[data-pjax]', '#pjax-container',  {timeout: 10000})
     
    $('#pjax-container').on("pjax:send", function(e) {
        
        // if PJAX is taking longer than 250ms... show the loading message & hide existing content
        /*
        loadingTimeout = setTimeout(function() {
            $("#pjax-loading").show();
            $('#pjax-container').hide();
        }, 250);
        */
        
        $("#pjax-loading").show();
        $('#pjax-container').hide();
              
    });
    

    $('#pjax-container').on("pjax:complete", function() {
                
        // once pjax completes... hide the loading message and make sure the content is showing    
        
        // settimeout example to show pjax at work - remove this in favor of the loadingtimeout function above
        setTimeout(function() {
              // do something after 1 seconds
              $("#pjax-loading").hide();
              $('#pjax-container').show();
        }, 500);

        // cancel showing the message when the ajax call completes.
        //clearTimeout(loadingTimeout);
        
    });
        
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });

    
}); 
