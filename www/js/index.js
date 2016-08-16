$(function() {
	document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener('backbutton', function (e) {
            e.preventDefault();
        }, false);
	}
	
	$('#go').click(function() {
		for(var a = 0; a < 6; a++) {
			localStorage.setItem('vid' + (a + 1), $('#vid' + (a + 1)).val().split('/')[3].replace('watch?v=', ''));
		}
		window.location.href = 'select.html';
		return false;
	});
});