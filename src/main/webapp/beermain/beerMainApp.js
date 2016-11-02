
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


$("#loginBtn").click(function(event) {
	var user = {
    email: $("#email").val(),
    password: $("#password").val(),
    saveEmail: $("#saveEmail").is(":checked")
  }
  ajaxLogin(user)
});

function ajaxLogin(user) {
	$.ajax({
		url: serverAddr + "/auth/login.json",
		method: "POST",
		dataType: "json",
		data: user,
		success: function(obj) {
			var result = obj.jsonResult
		    if (result.state != "success") {
	            alert("로그인 실패입니다.\n이메일 또는 암호를 확인하세요.")
	            return
	        }
	        window.location.href = "../beermain/beerMainApp.html"
		},
		error: function(msg) {
			alert(msg)
		}
	})
}

function ajaxLogout(user) {
	$.getJSON(serverAddr + "/auth/logout.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success")
	        console.log("로그아웃 실패입니다.")
    })
}

//function init() {
//	var cookieMap = bit.cookieToObject()
//	
//	if ("email" in cookieMap) { // cookieMap 객체에 email 이라는 이름의 프로퍼티가 있는가?
//		$("#email").val(cookieMap["email"])
//		$("#saveEmail").attr("checked", true)
//	}
//}


