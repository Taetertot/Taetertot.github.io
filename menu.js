document.addEventListener("DOMContentLoaded", openCloseNav);

		function openCloseNav() {
		  var mySideBar = document.getElementById("mySidebar");
		  var main = document.getElementById("main");
		  var myCloseMenu = document.getElementById("closeMenu");
		  var myOpenMenu = document.getElementById("openMenu");
			
		  <!-- sidebar position, padding-top, and other properties should already be set but this is just in case the style gets removed for some reason which is an issue that has come up -->
		  mySideBar.style.height = "100%";
		  mySideBar.style.width = "0";
		  mySideBar.style.position = "fixed";
		  mySideBar.style.zindex = "1";
		  mySideBar.style.top = "0";
		  mySideBar.style.left = "0";
		  mySideBar.style.backgroundColor = "#0";
		  mySideBar.style.overflowX = "hidden";
		  mySideBar.style.transition = "0.5s";
		  mySideBar.style.paddingTop = "65px";
		  
		  if (mySideBar.style.display === "block") {
			mySideBar.style.display = "none";
			mySideBar.style.width = "0";
			main.style.marginLeft = "0";
			myCloseMenu.style.display = "none";
			myOpenMenu.style.display = "block";
		  } else {
			mySideBar.style.display = "block";
			mySideBar.style.width = "350px";
			main.style.marginLeft = "300px";
			myCloseMenu.style.display = "block";
			myOpenMenu.style.display = "none";
		  }
		}

		/* we now call the open close nav only after domcontentloaded has been fired 
		openCloseNav(); 
		*/
		
