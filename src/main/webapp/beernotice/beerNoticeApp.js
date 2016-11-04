

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

var noticeBtn = document.querySelectorAll(".noticeBtn")
for(var i = 0; i < noticeBtn.length; i++) {
		noticeBtn[i].onclick = function(event) {
	      window.location.href="../beernotice/beerNoticeApp.html"
	    }
	  }


// ddddddddddddddddddddddddddddddddddd

$("#loginBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

$("#logoutBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

function ajaxBeerNoticeList() {
	$.getJSON(serverAddr + "/beernotice/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		console.log(result)
		
		
	    var template = Handlebars.compile($('#trTemplateText').html())
	    $("#boardTable tbody").html(template(result))
	    
	    $(".titleLink").click(function(event) {
		    window.location.href = "beerNoticeForm.html?no=" + $(this).attr("data-no")
	    })
    })
}

function ajaxLoginUser() {
	$.getJSON(serverAddr + "/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
	    if (result.state != "success") { // 로그아웃 상태일 경우 로그인 상태와 관련된 태그를 감춘다.
	         $('.my-login').css("display", "none")
	         return
	    }
	      
	    $('.my-logout').css("display", "none")
	      
	    $("#userName").text(result.data.name);
    })
}
