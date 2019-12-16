function showEvents(e){
    var code = document.getElementById("eventCode").value;
  
    if(code.toUpperCase()=== 'X'){ 
      document.getElementById("event-form").style.display = "none"
      document.getElementById("wedding-events").style.visibility = "visible"
    }
    else if(code.toUpperCase() === 'Y'){
      document.getElementById("event-form").style.display = "none"
      document.getElementById("grah-shanti").style.display = "none"
      $('.custom-event').closest('[class^="col-md"]')
      .removeClass('col-md-3')
      .addClass('col-md-4');    
      document.getElementById("wedding-events").style.visibility = "visible"
    }
    else if(code.toUpperCase() === 'Z'){
        document.getElementById("event-form").style.display = "none"
        document.getElementById("grah-shanti").style.display = "none"
        document.getElementById("sangeet").style.display = "none"
        document.getElementById("wedding").style.display = "none"
        $('.custom-event').closest('[class^="col-md"]')
        .removeClass('col-md-3')
        .addClass('col-md-12');    
        document.getElementById("wedding-events").style.visibility = "visible"
    }
    e.preventDefault();
  }
  
  