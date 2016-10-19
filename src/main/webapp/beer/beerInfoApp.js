
var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i <homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="../beermain/beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i <infoBtn.length; i++) {
		infoBtn[i].onclick = function(event) {
	      window.location.href="beerInfoApp.html"
	    }
	  }

var cateBtn = document.querySelectorAll(".cateBtn")
for(var i = 0; i <cateBtn.length; i++) {
	cateBtn[i].onclick = function(event) {
		window.location.href="../beercate/beerCateApp.html"
	}
}
// 링크 