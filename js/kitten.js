/**
	* ------- Animate Cat Function (logo img element) ------------
	* | Scales our cat image every 50ms by 5% up or down between |
	* | 300px and 600px                                           |
	* -------------------------------------------------------------
	**/
	function animateCat(logo){
		var currentWidth = logo.width();
		var up = true;
		var down = false;

		if(currentWidth > 600 && scaling == up){
			//start scaling down now
			scaling = down;	
			logo.width(600);
		} 
		else if(currentWidth < 300 && scaling == down){
			//start scaling back up
			scaling = up;
			logo.width(300);
		}
		else if(scaling == up){
			scale(logo, 1.05);
		}
		else{
			scale(logo, 0.95);
		}
	}

	//Scale our element's width by a multiplication factor
	function scale(element, factor){
		var currentWidth = element.width();
		element.width(currentWidth * factor);
	}

	//Function to change some css attributes of our kitten!
	function cssChange(element){
		element.css({
			border:"3px dotted pink" + randomColorCode()
		});

	}

	function randomColorCode(){
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}

	$(document).ready(function(){
		//var logo = $("#logo");

		 //Selecting a the div with class="banner", all img tags inside of that div
		var logo = $("div.banner img:first");
		cssChange(logo);

		 scaling = true;

		logo.attr("src", "http://placekitten.com/g/200/300");

		setTimeout(function(){ 
			alert("Kitty Should be loaded now.  Click ok to animate!"); 
			setInterval(animateCat, 50, logo); 
		}, 2500, logo);
		
	});
