// event 1 ---------------------------------------------------------------------

//title
var e1title = "Statistics Café";
//logo
var e1logo = "assets/paper_img/eventlogos/cv.svg";
//location
var e1location = "cool location in Utrecht";
//time/date
var e1datetime = "14/10/2016<br />21:00";
//text
var e1text = "Two professors will perform in this epic rap battle of history! The topic is yet to be determined, but we can guarantee that it will be very good. We will start with <em>free</em> drinks of course, and after that you'll have to pay for yourself and your friends. <br /><br /> Sign up below so we know how many free drinks to order!";
//sign-up link
var e1link = "https://goo.gl/forms/UxAVyjLO1G17Xfs93";


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

// javascript ------------------------------------------------------------------

$('.e1title').html("");
$('.e1title').append(e1title);
$('.e1logo').attr("src", e1logo);
$('.e1link').attr("href", e1link);
$('.e1link').attr("target", "_blank");
$('.e1location').html("");
$('.e1location').append(e1location + "<br />" + e1datetime);
$('.e1text').html("");
$('.e1text').append(e1text);


$('.e2title').html("").load("assets/events/event1.txt #head");
$('.e2logo').attr("src", e2logo);
$('.e2link').attr("href", e2link);
$('.e2link').attr("target", "_blank");
$('.e2location').html("");
$('.e2location').append(e2location + "<br />" + e2datetime);
$('.e2text').html("");
$('.e2text').append(e2text);


$('.e3title').html("");
$('.e3title').append(e3title);
$('.e3logo').attr("src", e3logo);
$('.e3link').attr("href", e3link);
$('.e3link').attr("target", "_blank");
$('.e3location').html("");
$('.e3location').append(e3location + "<br />" + e1datetime);
$('.e3text').html("");
$('.e3text').append(e3text);
