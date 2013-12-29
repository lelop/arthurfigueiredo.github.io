var projects = document.querySelectorAll(".preview,.info");
var projectsStartsAfter=780;
var body = document.body;
$(function(){

	window.addEventListener("scroll",function(){
		
		var n=Math.max($("body").scrollTop(),$("html").scrollTop());
		
		var i = projects.length;
		while(i--){
			n+$(window).height()-projectsStartsAfter>projects[i].position().top ? projects[i].classList.add("trans"): projects[i].classList.remove("trans");
		}

	});

});
