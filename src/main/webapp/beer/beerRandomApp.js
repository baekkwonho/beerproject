
function ajaxLoadBeerRandom() {
	$.getJSON(serverAddr + "/beerlist/randomlist.json", function(obj) {
		var result = obj.jsonResult
		
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		ajaxLoadBeerRandomImg(result.data[0].no)
		
		var beerDivTemplate = Handlebars.compile($("#beerRandomTemplateText").html())
    	$("#beerRandomText").html(beerDivTemplate(result.data[0]))
		
		
	})
}

function ajaxLoadBeerRandomImg(no) { //brno로 넘겨주기
	$.getJSON(serverAddr + "/beerlist/selectonephoto.json?no="+ no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		//이미지 경로 변경
		$("#beerrandom_img").css({"background": "url(/beerproject/upload/"+result.data[0].brphoto_path, "background-repeat" : "no-repeat", "background-position" : "center"})
		
	})
	
}
	