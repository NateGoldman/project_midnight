$(document).ready(function() {

	// function to repeat
	function emptyAndAppend(data, rand_num) {
	 		$("#place").empty();
  		$("#place").append(data[rand_num].place);
  		$("#caption").empty();
  		$("#caption").append('"' + data[rand_num].caption + '"');
  		$("#google_it").attr("href", "https://www.google.com/search?q=" + data[rand_num].place + "+Boston")
	}

	// on load	
	$.getJSON("places.json", function(data) {
		var rand_num = Math.floor(Math.random()*data.length);
		emptyAndAppend(data, rand_num);
	 	
	 	// on click
	 	$("#nah").click(function(){
	 		rand_num = Math.floor(Math.random()*data.length);
	 		emptyAndAppend(data, rand_num);
  	});	
	});

});