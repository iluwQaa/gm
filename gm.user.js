// ==UserScript==
// @name        GM WinterIndieFest KeyGraber
// @namespace   gameminer.ru
// @description key graber for winter indi fest
// @version     2.1
// @grant       none
// @require	http://static.gameminer.ru/static/js/jquery-1.7.1.min.js
// @include     http://event.gameminer.ru/*
// ==/UserScript==
$(document).ready(function() {
    var time = $('div.event-head-keyttl').html();
    if ($('.event-head-keys__chance').length > 0) {
        console.log('Form found! Try submit...');
        $('form').submit();
    } else {
        console.log('Not found! Time left: ' + time);
        setTimeout(function() {
            location.reload();
        }, 60000);
    }
});
