$("#login_menu_Btn").click(function(event) {
	init()
})


$("#loginBtn").click(function(event) {
	var user = {
    email: $("#email").val(),
    password: $("#password").val(),
    saveEmail: $("#saveEmail").is(":checked")
    }
	ajaxLogin(user)
});

function ajaxLogin(user) {
	$.post(serverAddr+"/auth/login.json",user,function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("로그인 실패 입니다.")
			return
		}
		
		console.log(result)
		
		window.location.reload()
		
	})
}

$("#logout_menu_Btn").click(function(event) {
	ajaxLogout()
})


function ajaxLogout() {
	$.post(serverAddr+"/auth/logout.json",function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("로그아웃 실패 입니다.")
			return
		}
		
		window.location.reload()
		
	})
}

function init() {
	var cookieMap = cookieToObject()
	
	if ("email" in cookieMap) { // cookieMap 객체에 email 이라는 이름의 프로퍼티가 있는가?
		$("#email").val(cookieMap["email"])
		$("#saveEmail").attr("checked", true)
		$("#emailbox label").addClass('active highlight')

	}
	
}

function cookieToObject() {
		var cookies = document.cookie.split(";")
		var obj = {}
		
		if (cookies.length == 0) 
			return obj;
		
	    cookies.forEach(function(data) {
		  var cookie = data.trim().split("=")
		  obj[cookie[0]] = cookie[1].replace(/\"/gi, "")
	    });
	    
		return obj
}

//로그인 정보 확인
function ajaxLoginUser() {
	$.getJSON(serverAddr + "/auth/loginuser.json", function(obj) {
		var result = obj.jsonResult
		
	    if (result.state != "success") { 
	         $('#logout_menu_Btn').css("display", "none")
	         return
	    }
	     
	    $('#login_menu_Btn').css("display", "none")
	    $('#logout_menu_Btn').css("display", "block")
	    
    })
}








