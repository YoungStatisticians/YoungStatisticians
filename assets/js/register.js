var ip = 0;
var email = 'no-email';
var name = "no-name";

$.getJSON('//api.ipify.org?format=json', function(data) {
  ip = data.ip;
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = dd+'/'+mm+'/'+yyyy;

var key = "AIzaSyBKjNy-qMqvCWUGfTLdSBonc9k8jEVNHnI"
var submiturl = "//sheets.googleapis.com/v4/1c1W5JBL8R3n1Ov5M3IRJa-2hGTa_2vEjrspKteuHiIo/values/Sheet1!A1:E1:append?valueInputOption=USER_ENTERED" + "?key=" + key
var vals = [email, today, ip, "Test"]

var put = {
  "range": "Sheet1!A1:E1",
  "majorDimension": "ROWS",
  "values": vals,
}

$.ajax({
    url: submiturl,
    type: 'PUT',
    body: put,
    success: function(result) {
        alert("Complete!")
        console.log(result)
    }
});
