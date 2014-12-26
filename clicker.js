$(document).ready(function() {
var time = $('div.event-head-keyttl').html();
if($('.event-head-keys__chance').length>0) {
  console.log('Form found! Try submit...');
  $('form').submit();
} else {
	console.log('Not found! Time left: '+time);
setTimeout(function () {
location.reload();
}, 60000);
}
	});
