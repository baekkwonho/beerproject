
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


//버튼 누르면 세션 생기기

$(document.body).on('click','#section1_menu1',function(event) {
	$("#section2_cate").css("display", "none")
	$("#section2_ctry").css("display","inline")
	
	ajaxLoadCtryList()
	
})


//버튼 누르면 세션 생기기
$(document.body).on('click','#section1_menu2',function(event) {
	$("#section2_ctry").css("display","none")
	$("#section2_cate").css("display", "inline")
	
	ajaxLoadCateAleList()
	ajaxLoadCateLagerList()
	ajaxLoadCateEtcList()
})







function ajaxLoadCateAleList() {
	$.getJSON(serverAddr + "/beerlist/subcateale.json", function(obj) {
		var result = obj.jsonResult
		
		var template = Handlebars.compile($("#cateInfoAleTemplateText").html())
		$("#alelist").html(template(result))
		
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		$(".aleno").click(function(event) {
			console.log($(this).attr("ale-no"))
			location.href="../beer/beerDetailApp.html?scno=" + $(this).attr("ale-no")
		})
	})
}

function ajaxLoadCateLagerList() {
	$.getJSON(serverAddr + "/beerlist/subcatelager.json", function(obj) {
		var result = obj.jsonResult
		
		var template = Handlebars.compile($("#cateInfoLagerTemplateText").html())
		$("#lagerlist").html(template(result))
		
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		$(".lagerno").click(function(event) {
			console.log($(this).attr("lager-no"))
			location.href="../beer/beerDetailApp.html?scno=" + $(this).attr("lager-no")
		})
	})
}

function ajaxLoadCateEtcList() {
	$.getJSON(serverAddr + "/beerlist/subcateetc.json", function(obj) {
		var result = obj.jsonResult
		
		var template = Handlebars.compile($("#cateInfoEtcTemplateText").html())
		$("#etclist").html(template(result))
		
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		$(".etcno").click(function(event) {
			console.log($(this).attr("etc-no"))
			location.href="../beer/beerDetailApp.html?scno=" + $(this).attr("etc-no")
		})
	})
}

function ajaxLoadCtryList() {
	$.getJSON(serverAddr + "/beerlist/ctrylist.json", function(obj) {
		var result = obj.jsonResult
	
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		var template = Handlebars.compile($("#ctryInfoTemplateText").html())
		$("#ctrylist").html(template(result))
	
		$(".ctryno").click(function(event) {
			console.log($(this).attr("ctry-no"))
			location.href="../beer/beerDetailApp.html?ctryno=" + $(this).attr("ctry-no")
		})
		
	})
}



//검색 enter 기능
$( function() {
	$("#searchbar").keydown(function(e) {
		if(e.keyCode == 13) {
			$("#searchbtn").click()
		}
	})
})

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

// 자동완성 기능
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





