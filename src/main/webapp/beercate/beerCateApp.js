
var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i <homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="../beermain/beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i <infoBtn.length; i++) {
		infoBtn[i].onclick = function(event) {
	      window.location.href="../beer/beerInfoApp.html"
	    }
	  }

function ajaxBeerCateList() {
	$.getJSON(serverAddr + "/beercate/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		var template = Handlebars.compile($("#divTemplateText").html())
		$("#section_menuAll").html(template(result))
		
	    $(".menu_div").click(function(event) {
	    	location.href="../beer/beerDetailApp.html?no=" + $(this).attr("data-no") + "cate"
	    });
		
	   
    })
}
