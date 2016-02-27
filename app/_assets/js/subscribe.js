$(document).ready(function() {
	$("#mc-embedded-subscribe-form").on("submit", function(e) {
		new Firebase("https://amber-fire-5129.firebaseio.com").child("emails").push($(this).serializeArray()[0].value);
	});
});