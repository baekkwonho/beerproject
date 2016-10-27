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

	var addBtn = document.querySelector("#beerAddBtn")
    addBtn.onclick = function(event) {
      window.location.href="../beeradd/beerAddApp.html"
  }

	$(document.body).on('click','#htBtn',function(event) {
		document.getElementById("tagContent").style.display="inline"
		document.getElementById("htAddBtn").style.display="inline"
		this.style.display="none"
	})
	
	$(document.body).on('click','#htAddBtn',function(event) {
		document.getElementById("tagContent").style.display="none"
		document.getElementById("htBtn").style.display="inline"
		this.style.display="none"
		
		var beerHashTag = {
			tagContent : $("#tagContent").val(),
			brno : $("#beerNo").val()
		}
		
		document.getElementById("tagContent").value=""
		ajaxHashTag(beerHashTag)
			
	})

//해쉬태그 등록
function ajaxHashTag(beerHashTag) {
	$.post(serverAddr + "/hashtag/tagadd.json", beerHashTag, function(obj) {
		var result = obj.jsonResult
		
		if (result.state != "success") {
			alert("해쉬태그 등록 실패입니다.")
			return
		}
		
		location.reload()
		
	})
}
	
//해쉬태그 출력
 function ajaxLoadHashTagScno(no) { //scno로 넘어온다.
 	$.getJSON(serverAddr + "/hashtag/taglistscno.json?no="+ no, function(obj) {
 		var result = obj.jsonResult
 		if (result.state != "success") {
 			alert("해쉬태그 조회 실패입니다.")
 			return
 		}
 		var beerHashTagTemplate = Handlebars.compile($("#beerHashTagText").html())
    	$("#hashTag_text").html(beerHashTagTemplate(result))
 	})
 }
 
//해쉬태그 출력
 function ajaxLoadHashTagBrno(no) { //brno로 넘어온다.
 	$.getJSON(serverAddr + "/hashtag/taglistbrno.json?no="+ no, function(obj) {
 		var result = obj.jsonResult
 		if (result.state != "success") {
 			alert("해쉬태그 조회 실패입니다.")
 			return
 		}
 		var beerHashTagTemplate = Handlebars.compile($("#beerHashTagText").html())
    	$("#hashTag_text").html(beerHashTagTemplate(result))
 	})
 }
 
//해당 맥주 정보 출력
function ajaxLoadBeerDetailScno(no) {  // no 는 scno로 받아온다.
		$.getJSON(serverAddr + "/beer/subcateonescno.json?no="+ no, function(obj) {
			var result = obj.jsonResult
			if (result.state != "success") {
				alert("조회 실패입니다.")
				return
			}
		//사진 넣기 
		ajaxLoadBeerImg(result.data.no) // brno넘기기
			
		// 맥주 설명 넣기
		var beerParaTemplate = Handlebars.compile($("#beerParaTemplateText").html())
    	$("#beerpara").html(beerParaTemplate(result.data))
    	// 맥주 정보 넣기
    	var beerDivTemplate = Handlebars.compile($("#beerDivTemplateText").html())
    	$("#info_wrap").html(beerDivTemplate(result.data))
	})
}
	

//해당 맥주 분류에 대한 리스트 출력
function ajaxLoadSubCateList(no) {  // no 는 scno로 받아온다.
		$.getJSON(serverAddr + "/beerlist/subcatelistone.json?no="+ no, function(obj) {
			var result = obj.jsonResult
			if (result.state != "success") {
				alert("리스트 조회 실패입니다.")
				return
			}
			
			var template = Handlebars.compile($("#trTemplateText").html())
		    $("#beerTable tbody").html(template(result))
		    
		    $(".noBtn").click(function(event) {
		    	location.href = "beerDetailApp.html?no=" + $(this).attr("data-no") +"?scno=" +no
		    })
		})
}

//해당 맥주 정보 출력
function ajaxLoadBeerDetailBrno(no) {  // no 는 brno로 받아온다.
		$.getJSON(serverAddr + "/beer/subcateonebrno.json?no="+ no, function(obj) {
			var result = obj.jsonResult
			if (result.state != "success") {
				alert("조회 실패입니다.")
				return
			}
			
		//맥주 사진 넣기
		ajaxLoadBeerImg(no)
			
		// 맥주 설명 넣기
		var beerParaTemplate = Handlebars.compile($("#beerParaTemplateText").html())
    	$("#beerpara").html(beerParaTemplate(result.data))
    	// 맥주 정보 넣기
    	var beerDivTemplate = Handlebars.compile($("#beerDivTemplateText").html())
    	$("#info_wrap").html(beerDivTemplate(result.data))
	})
}

function ajaxLoadBeerImg(no) { //brno로 넘겨주기
	$.getJSON(serverAddr + "/beerlist/selectonephoto.json?no="+ no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		//이미지 경로 변경
	//	$("#beerimg").css("background", "url(/beerproject/upload/"+result.data[0].brphoto_path)
		$("#beerimg").css({"background": "url(/beerproject/upload/"+result.data[0].brphoto_path, "background-repeat" : "no-repeat", "background-position" : "center"})
		
	})
	
}
	
