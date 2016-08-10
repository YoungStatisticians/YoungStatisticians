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

//title
var e2title = "Company Visit Company X";
//logo
var e2logo = "assets/paper_img/eventlogos/cv.svg";
//location
var e2location = "Company X Amsterdam";
//time/date
var e2datetime = "31/11/2016<br />19:00";
//text
var e2text = "In this event we will visit the statistical department at Company X. As you may know, this company does a lot with data and we expect to learn a lot from their experience in the field! The afternoon will start with some <em>free</em> drinks and we will end with more drinks.<br /> <br />Sign up below so the great people at Company X know how big their room should be!";
//sign-up link
var e2link = "https://goo.gl/forms/UxAVyjLO1G17Xfs93";


// event 3 ---------------------------------------------------------------------

//title
var e3title = "Cross Validation Meeting";
//logo
var e3logo = "assets/paper_img/eventlogos/cv.svg";
//location
var e3location = "Nice location in Leiden";
//time/date
var e3datetime = "31/21/2016<br />19:00";
var e3text = "In this meeting, three PhD students will talk about their research regarding some cool topics. They will engage in deep conversations about what it is to be a statistician. <br /><br />Sign up below so we know how many free drinks to order!";
//text
//sign-up link
var e3link = "https://goo.gl/forms/UxAVyjLO1G17Xfs93";

// Load data -------------------------------------------------------------------

$.getJSON("assets/events/event1.json", function (data) {
  e2title = data.title;
  e2logo = data.logo;
});



// DOM manipulation ------------------------------------------------------------

$('.e1title').html("").append(e1title);
$('.e1logo').attr("src", e1logo);
$('.e1link').attr("href", e1link);
$('.e1link').attr("target", "_blank");
$('.e1location').html("");
$('.e1location').append(e1location + "<br />" + e1datetime);
$('.e1text').html("").append(e1text);


$('.e2title').html("").append(e2title);
$('.e2logo').attr("src", e1logo);
$('.e2link').attr("href", e2link);
$('.e2link').attr("target", "_blank");
$('.e2location').html("");
$('.e2location').append(e2location + "<br />" + e2datetime);
$('.e2text').html("").append(e2text);


$('.e3title').html("").append(e3title);
$('.e3logo').attr("src", e3logo);
$('.e3link').attr("href", e3link);
$('.e3link').attr("target", "_blank");
$('.e3location').html("");
$('.e3location').append(e3location + "<br />" + e1datetime);
$('.e3text').html("").append(e3text);
