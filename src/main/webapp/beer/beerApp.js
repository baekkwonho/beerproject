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


function ajaxBeerList() {
	$.getJSON(serverAddr + "/beer/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var template = Handlebars.compile($("#trTemplateText").html())
	    $("#beerTable tbody").html(template(result))
	    
	   
    })
}

function ajaxCateBeerList(no) {
	$.getJSON(serverAddr + "/beer/cateList.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		var arr = result.data
		var template = Handlebars.compile($("#trTemplateText").html())
	    $("#beerTable tbody").html(template(result))
	    
	    $(".noBtn").click(function(event) {
	    	location.href = "beerDetailApp.html?no=" + $(this).attr("data-no") + arr[0].cateno + "detail"
	    });
		
	})
	
}



