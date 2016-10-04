
function ajaxLoadBeer(no) {
	$.getJSON("detail.json?no="+ no, function(result) {
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		var beerdesc = ""
		var contents = ""
			
		beerdesc =
			"<h1>맥주설명</h1>" + 
			"<p>" + result.data.describe + "</p>"
		
		contents = 
    		"<div id='beer_country' class='col-sm-6 col-md-6 col-lg-6'><h1>제조국가: " + result.data.country + "</h1></div>" +
    		"<div id='beer_company' class='col-sm-6 col-md-6 col-lg-6'><h1>제조사: " + result.data.company + "</h1></div>" +
    		"<div id='beer_alchol' class='col-sm-6 col-md-6 col-lg-6'><h1>알콜: " + result.data.alchol + "%</h1></div>" +
    		"<div id='beer_volume' class='col-sm-6 col-md-6 col-lg-6'><h1>용량: " + result.data.volume + "ml</h1></div>" +
    		"<div id='beer_volume' class='col-sm-6 col-md-6 col-lg-6'><h1>제조방식: " + result.data.catename + "</h1></div>"
    		
    	$("#beerpara").html(beerdesc)
    	$("#info_wrap").html(contents)
	})
}