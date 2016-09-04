var ip = 0;
var email = 'no-email';

$.getJSON('//api.ipify.org?format=json', function(data) {
  ip = data.ip;
});
