// event 1 ---------------------------------------------------------------------

$.get("assets/events/event1.txt", function(data){
    try {
      var json = $.parseJSON(data);
    }
    catch(err){
      console.log("Failed to parse JSON. Check your file! Error message:");
      console.log(err);
      return;
    }

    $('.e1title').html("").append(json.title);
    $('.e1logo').attr("src", json.logo);
    $('.e1link').attr("href", json.link).attr("target", "_blank");
    $('.e1location').html("").append(json.location + "<br />" + json.date + "<br />" + json.time);
    $('.e1text').html("").append(json.description);
});


// event 2 ---------------------------------------------------------------------

$.get("assets/events/event2.txt", function(data){
    try {
      var json = $.parseJSON(data);
    }
    catch(err){
      console.log("Failed to parse JSON. Check your file! Error message:");
      console.log(err);
      return;
    }

    $('.e2title').html("").append(json.title);
    $('.e2logo').attr("src", json.logo);
    $('.e2link').attr("href", json.link).attr("target", "_blank");
    $('.e2location').html("").append(json.location + "<br />" + json.date + "<br />" + json.time);
    $('.e2text').html("").append(json.description);
});


// event 3 ---------------------------------------------------------------------

$.get("assets/events/event3.txt", function(data){
    try {
      var json = $.parseJSON(data);
    }
    catch(err){
      console.log("Failed to parse JSON. Check your file! Error message:");
      console.log(err);
      return;
    }

    $('.e3title').html("").append(json.title);
    $('.e3logo').attr("src", json.logo);
    $('.e3link').attr("href", json.link).attr("target", "_blank");
    $('.e3location').html("").append(json.location + "<br />" + json.date + "<br />" + json.time);
    $('.e3text').html("").append(json.description);
});
