	var logoMenu = document.querySelectorAll(".logoMenu")
	  for(var i = 0; i <logoMenu.length; i++) {
	    logoMenu[i].onclick = function(event) {
	      window.location.href="../beermain/beerMainApp.html"
	    }
	  }
	
	var infoMenu = document.querySelectorAll(".infoMenu")
	for(var i = 0; i <infoMenu.length; i++) {
	  infoMenu[i].onclick = function(event) {
	    window.location.href="../beer/beerInfoApp.html"
	  }
	}  
	
	var videoMenu = document.querySelectorAll(".videoMenu")
	for(var i = 0; i <videoMenu.length; i++) {
	  videoMenu[i].onclick = function(event) {
	    window.location.href="../beervideo/beerVideoApp.html"
	  }
	}


function ajaxLoadBeer(no) {
	$.getJSON(serverAddr + "/beer/detail.json?no="+ no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
    	var beerParaTemplate = Handlebars.compile($("#beerParaTemplateText").html())
    	$("#beerpara").html(beerParaTemplate(result.data))
    	var beerDivTemplate = Handlebars.compile($("#beerDivTemplateText").html())
    	$("#info_wrap").html(beerDivTemplate(result.data))
	})
}

function ajaxLoadBeerCate(no) {
	$.getJSON(serverAddr + "/beer/cateDetail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
    	var beerParaTemplate = Handlebars.compile($("#beerParaTemplateText").html())
    	$("#beerpara").html(beerParaTemplate(result.data))
    	var beerDivTemplate = Handlebars.compile($("#beerDivTemplateText").html())
    	$("#info_wrap").html(beerDivTemplate(result.data))
    	
	})
}

