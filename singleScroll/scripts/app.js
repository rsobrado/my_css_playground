$(document).ready(function(ev){
	
	ScrollingEvents();
	$(".main").onepage_scroll({sectionContainer: "section"});

	
});

function ScrollingEvents(){
	$("#logo").click(function(e){e.preventDefault();$.scrollTo("#theHangarRebrandProject",1200);});
	$(".home").click(function(e){e.preventDefault();$.scrollTo("#page1",1200);});
	$(".ourNewFace").click(function(e){e.preventDefault();$.scrollTo("#page2",1200);});
	$(".manifesto").click(function(e){e.preventDefault();$.scrollTo("#page3",1200);});
	$(".caseStudy").click(function(e){e.preventDefault();$.scrollTo("#page4",1200);});
}


// function miniMenu(Mtop){
// 	if(Mtop >=250){         
// 		$('header'							).css("height",		"45px");
// 		$('header #logo a'			).css("width",		"140px");
// 		$('header .navbar'			).css("padding",	"5px 0 0");
// 		$('header .navbar .nav'	).css("margin",		"10px 0 0");
// 	}
// 	else{         
// 		$('header'							).css("height",		"90px");
// 		$('header #logo a'			).css("width",		"205px");
// 		$('header .navbar'			).css("padding",	"20px 0 0");
// 		$('header .navbar .nav'	).css("margin",		"20px 0 0");
// 	}
// }
