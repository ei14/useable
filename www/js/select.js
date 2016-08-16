$(function() {
	document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener('backbutton', function (e) {
            e.preventDefault();
        }, false);
	}
	$('div').click(function() {
		window.location.href = 'watch.html#' + this.innerHTML;
	});
});