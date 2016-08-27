$(function() {
	document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener('backbutton', function (e) {
            e.preventDefault();
        }, false);
	}
	
	for(var a = 1; a <= 6; a++) {
		if(localStorage.getItem('vid' + a)) {
			$('#vid' + a).val('https://youtu.be/' + localStorage.getItem('vid' + a));
		} else {
			
		}
	}
	
	$('#go').click(function() {
		for(var a = 1; a <= 6; a++) {
			localStorage.setItem('vid' + a, $('#vid' + a).val().split('/')[3].replace('watch?v=', ''));
		}
		window.location.href = 'select.html';
		return false;
	});
});