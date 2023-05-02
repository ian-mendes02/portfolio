const topButton = document.getElementById('top-button');
const wppButton = document.getElementById('whatsapp-button');

$(window).scroll(function() {
if ($(this).scrollTop() > 600) {
topButton.style.right = '10' + 'px';
setTimeout(function(){
wppButton.style.right = '10' + 'px';
}, 50)
} else {
topButton.style.right= '-100' + 'px';
setTimeout(function() {
wppButton.style.right = '-100' + 'px';
}, 50)
}
});