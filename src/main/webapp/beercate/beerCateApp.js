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


function ajaxBeerCateList() {
	$.getJSON(serverAddr + "/beercate/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var template = Handlebars.compile($("#divTemplateText").html())
		$("#section2_munuAll").html(template(result))
	    
	    $(".menu_div").click(function(event) {
	    	location.href="../beer/beerDetailApp.html?no=" + $(this).attr("data-no") + "cate"
	    });
	   
    })
}




