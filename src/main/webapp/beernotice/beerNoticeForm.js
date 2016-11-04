

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



$("#addBtn").click(function(event) {
	var beerNotice = {
	  title: $("#title").val(),
	  contents: $("#contents").val(),
	  password: $("#password").val()
	}
	ajaxAddBeerNotice(beerNotice)
});

$("#updateBtn").click(function(event) {
  var beerNotice = {
    title: $("#title").val(),
    contents: $("#contents").val(),
    password: $("#password").val(),
    no: $("#no").val()
  }
  ajaxUpdateBeerNotice(beerNotice)
});

$("#deleteBtn").click(function(event) {
  ajaxDeleteBeerNotice($("#no").val(), $("#password").val())
});

function ajaxAddBeerNotice(beerNotice) {
	$.post(serverAddr + "/beernotice/add.json", beerNotice, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("등록 실패입니다.")
	    	 return
	    } 
	    window.location.href = "beerNoticeApp.html"
	}, "json")
}

function ajaxLoadBeerNotice(no) {
	$.getJSON(serverAddr + "/beernotice/detail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		$("#no").val(result.data.no);
		$("#title").val(result.data.title);
		$("#contents").val(result.data.contents);
		$("#createdDate").text(result.data.createdDate);
		$("#viewCount").text(result.data.viewCount);
	})
}

function ajaxUpdateBeerNotice(beerNotice) {
	$.post(serverAddr + "/beernotice/update.json", beerNotice, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.")
			return
		}
		window.location.href = "beerNoticeApp.html"
	}, "json")
}

function ajaxDeleteBeerNotice(no, password) {
	$.getJSON(serverAddr + "/beernotice/delete.json", {
		no: no,
		password: password
	}, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("삭제 실패입니다.")
			return
		}
		location.href = "beerNoticeApp.html"
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