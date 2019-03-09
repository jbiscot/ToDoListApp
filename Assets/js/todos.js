
//lining trough the chores v.1
/*$('li').click(function(){

	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css("textDecoration", "none")
		$(this).css("color", "black")
	}
	else{
		$(this).css({
			textDecoration: "line-through",
			color: "gray"
		});
	}
});*/

//lining trough the chores v.2
/*$('li').click(function(){
	$(this).toggleClass("done");	
});*/

//lining trough the chores v.3
$('ul').on("click","li",function(){
	$(this).toggleClass("done");	
});


//Inserting a new activity in the "li"'s list
$("input[type=text]").keypress(function(event){

	if (event.which===13) {
	var todo = $(this).val();

	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo +  "</li>");
	$(this).val("");	
	}
})


//removing a chore using the 'X' span
/*$("span").click(function(event){
	$(this).parent().fadeOut(300,function(){
	  $(this).remove();
	});
	event.stopPropagation();
})*/

//removing a chore using the 'X' span v.2
$("ul").on("click", "span", function(event){

	$(this).parent().fadeOut(300,function(){
	  $(this).remove();
	});
	event.stopPropagation();
})


$(".fa-plus-square").click(function() {

	$("input[type='text']").fadeToggle()

});