
var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i <homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i <infoBtn.length; i++) {
		infoBtn[i].onclick = function(event) {
	      window.location.href="../beer/beerInfoApp.html"
	    }
	  }

var searchBtn = document.querySelector("#searchbtn")
searchBtn.onclick = function(event) {
	var beer = {
		brbrname : $('#searchbar').val()
	}
	
	ajaxSearchBeer(beer)
}

function ajaxSearchBeer(beer) {
	$.post(serverAddr + "/beerlist/search.json", beer, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("검색 결과가 없습니다.")
			return
		}
		
		var brno = result.data.brbrno
		var cateno = result.data.cateno
		
		window.location.href="../beer/beerDetailApp.html?no="+brno+cateno+"detail"
		
	})
	
}

