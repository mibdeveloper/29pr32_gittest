
function vasya(argument) {
	// body...
}
for (var i = string.length - 1; i >= 0; i--) {
	string[i]
}

var currentNewsId= 0;
var newsMaxId= 4;

$( "img" ).hide();

$(function(){
	$("#prevBtn").click(function(){ 
	 $( "img" ).show(); 
		currentNewsId--;
		if(currentNewsId < 0 ){
			currentNewsId = newsMaxId;
		}
			$("#message").load("ajax.php?newsid=" + currentNewsId, function(){
				$( "img" ).hide();
				$( "#message" ).toggle("drop");
			});
 		 });
	$("#nextBtn").click(function(){ 
 	 $( "img" ).show();
		currentNewsId++;
		if(currentNewsId > newsMaxId){
			currentNewsId=0;
		}
		$("#message").load("ajax.php?newsid=" + currentNewsId, function(){
			$( "img" ).hide();
			$( "#message" ).toggle( "drop");
		});
	});

});