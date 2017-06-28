$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var name = $("#nombre").val();
		var message = $("#mensaje").val();
		if(name == "" && message == ""){
			alert("Debes escribir tu nombre y el ensaje");
		}else{
			$("#comentarios").append("<div><span class='center-aling'>" + name + "</span><p class='center-aling'>" + message + "</p></div>");
		}
	});
});