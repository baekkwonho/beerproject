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

//confirm button

$("#confirmBtn").click(function(event) {
	
	if ( $("#sign_up_email").val().split("@").length == 1 || $("#sign_up_email").val().split("@").length > 2) {
		alert("이메일 양식이 아닙니다.")
		return
	}
	
	var user = {
		email: $("#sign_up_email").val()
	}
	
	ajaxConfirmEmail(user)
})


// confirm email
function ajaxConfirmEmail(user) {
	$.post(serverAddr+"/auth/confirmemail.json",user,function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			//alert("이메일이 존재 합니다.")
			$('#email_fail').css("display", "block")
			$("#email_success").css("display", "none")
			//문구로 보여주기
			return
		}
		$('#email_fail').css("display", "none")
		$("#email_success").css("display", "block")
		console.log("confirm Email success")
		
	})
}


//sign up btn 

$("#sign_up_btn").click(function(event) {
	
	var flag = true
	
	if($("#sign_up_password").val() === "") {
		alert("비밀번호 입력 해 주세요.")
		return
	} else if ($("#sign_up_confirm_password").val() === "") {
		alert("확인 비밀번호를 입력 해 주세요.")
		return
	} else if ($("#sign_up_password").val() !== $("#sign_up_confirm_password").val()) {
		alert("비밀번호가 일치하지 않습니다.")
		return
	} else if ($("#sign_up_nickname").val() === "") {
		alert("닉네임을 입력 해 주세요.")
		return
	}
	
	var year = new Date();
	
	if ($("#birth_year").val() !== "") {
		if ($("#birth_year").val() <= year.getFullYear() - 19) {
			var birth_year = $("#birth_year").val()
			flag = false
		} else {
			alert("성인이 아닙니다.")
			return
		}
	}
	
	if ($("#birth_month").val() !== "") {
		if ($("#birth_month").val() < 1 || $("#birth_month").val() > 12) {
			alert("날짜를 확인 해 주세요.")
			return
		} else if ($("#birth_month").val().length == 1) {
			var birth_month = "0"+$("#birth_month").val()
		} else {
			var birth_month = $("#birth_month").val()
		}
	} else if ($("#birth_year").val() !== "" && $("#birth_month").val() === "") {
		alert("날짜를 확인 해 주세요.")
		return
	}
	
	if ($("#birth_date").val() !== "") {
		if ($("#birth_date").val() < 1 || $("#birth_date").val() > 31) {
			alert("날짜를 확인 해 주세요.")
			return
		} else if ($("#birth_date").val().length == 1) {
			var birth_date = "0"+$("#birth_date").val()
		} else {
			var birth_date = $("#birth_date").val()
		}
	} else if ($("#birth_year").val() !== "" && $("#birth_month").val() !== "" && $("#birth_date").val() === "") {
		alert("날짜를 확인 해 주세요.")
		return
	}
	
	
	if (flag) {
		var user = {
				password : $("#sign_up_password").val(),
				nickname: $("#sign_up_nickname").val()
		}
		// 기본 정보만 입력한 유저 정보 넘기기
		ajaxSignUpDefaultUser(user)
		
	} else if(!flag) {
		if ($("input[name=gender]:checked").val() === undefined) {
			alert("성별을 입력 해 주세요.")
			return
		}
		if ($("#option_addr").val() === "") {
			alert("주소를 입력 해 주세요.")
			return
		}
		if ($("#option_drink").val() === "") {
			alert("주량을 입력 해 주세요.")
			return
		}
		
		var user = {
				password : $("#sign_up_password").val(),
				nickname: $("#sign_up_nickname").val(),
				birth: birth_year + birth_month + birth_date,
				gender: $("input[name=gender]:checked").val(),
				address: $("#option_addr").val(),
				drink: $("#option_drink").val()
		}
		// 전체 정보 입력한 유저 정보 넘기기
		ajaxSignUpOptiontUser(user)
	}
	
	
	
})

//회원가입  - 기본 정보만 입력시

function ajaxSignUpDefaultUser(user) {
	$.post(serverAddr+"/auth/defaultsignup.json", user, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("회원가입 실패 입니다.")
			return
		}
		
		window.location.reload()
		
	})
}


//회원가입  - 추가 정보만 입력시

function ajaxSignUpOptiontUser(user) {
	$.post(serverAddr+"/auth/optionsignup.json", user, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("회원가입 실패 입니다.")
			return
		}
		
		window.location.reload()
		
	})
}





