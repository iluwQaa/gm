<<<<<<< HEAD
$(document).ready(function() {
var time = $('div.event-head-keyttl').html();
if($('.event-head-keys__chance').length>0) {
=======
var time = $('div.event-head-keyttl').html();
if($('event-head-keys__chance').length>0) {
>>>>>>> f4bf8d14b8fa95969dc6bb04687987e6d8d96c0b
  console.log('Form found! Try submit...');
  $('form').submit();
} else {
	console.log('Not found! Time left: '+time);
setTimeout(function () {
location.reload();
}, 60000);
}
<<<<<<< HEAD
	});
=======
>>>>>>> f4bf8d14b8fa95969dc6bb04687987e6d8d96c0b
