
var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i < homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i < infoBtn.length; i++) {
		infoBtn[i].onclick = function(event) {
	      window.location.href="../beer/beerInfoApp.html"
	    }
	  }

var noticeBtn = document.querySelectorAll(".noticeBtn")
for(var i = 0; i < noticeBtn.length; i++) {
		noticeBtn[i].onclick = function(event) {
	      window.location.href="../beernotice/beerNoticeApp.html"
	    }
	  }

var searchBtn = document.querySelector("#searchbtn")
searchBtn.onclick = function(event) {
	var beer = {
		search : $('#searchbar').val()
	}
	
	if (beer.search === "") {
		return ""
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
		
		var brno = result.data.no
		var scno = result.data.scno
		
		window.location.href="../beer/beerDetailApp.html?no="+brno +"?scno=" + scno
		
	})
}

// 검색 enter 기능
$( function() {
	$("#searchbar").keydown(function(e) {
		if(e.keyCode == 13) {
			$("#searchbtn").click()
		}
	})
})


//자동완성 기능
$( function() {
	$.post(serverAddr + "/beerlist/tagnames.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("검색 결과가 없습니다.")
			return
		}
		
	 $("#searchbar").autocomplete({
      source: result.data,
      minLength: 2
      
    });
});
})

