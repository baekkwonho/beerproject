
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
$(document.body).on('click','#section1_menu2',function(event) {
	$("#section2").css("display", "inline")
	
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






