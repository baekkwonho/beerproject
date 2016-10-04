

function ajaxBeerList() {
	$.getJSON("list.json", function(result) {
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var contents = ""
	    var arr = result.data
	    for (var i in arr) {
	    	contents += "<tr>" +
	    	  "<td>" + "<a href='#' class='noBtn' data-no='"+ arr[i].no + "'>" + arr[i].no + "</a>"+ "</td>" + 
	    	  "<td>" + arr[i].catename + "</td>" +
	    	  "<td>" + arr[i].brbrname + "</td>" +
	    	  "<td>" + arr[i].describe + "</td>" +
	    	  "<td>" + arr[i].country + "</td>" +
	    	  "<td>" + arr[i].company + "</td>" +
	    	  "<td>" + arr[i].alchol + "</td>" +
	    	  "<td>" + arr[i].volume + "</td>" +
	    	  "</tr>"
	    }
		
	    $("#beerTable tbody").html(contents)
	    $(".noBtn").click(function(event) {
	    	location.href = "../beer/beerDetailApp.html?no=" + $(this).attr("data-no")
	    });
    })
}


//
//function ajaxBeerOneList() {
//	$.getJSON("detail.json", function(result) {
//		if (result.state != "success") {
//	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
//	    	 return
//	    }
//		
//		var contents = ""
//	    var arr = result.data
//	    for (var i in arr) {
//	    	contents += "<tr>" +
//	    	  "<td>" + arr[i].no + "</td>" + 
//	    	  "<td>" + arr[i].catenm + "</td"> +
//	    	  "<td>" + arr[i].brbrnm + "</td>" +
//	    	  "<td>" + arr[i].br_desc + "</td>" +
//	    	  "<td>" + arr[i].ctry + "</td>" +
//	    	  "<td>" + arr[i].comp + "</td>" +
//	    	  "<td>" + arr[i].achl + "</td>" +
//	    	  "<td>" + arr[i].vol + "</td>" +
//	    	  "</tr>"
//	    }
//	    $("#beerTable tbody").html(contents)
//	   
//    })
//}

//
//function ajaxBeerDescList() {
//	$.getJSON("detail.json", function(result) {
//		if (result.state != "success") {
//	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
//	    	 return
//	    }
//		
//		var contents = ""
//	    var arr = result.data
//	    for (var i in arr) {
//	    	contents += 
//	    		"<div id='beer_country' class='col-sm-6 col-md-6 col-lg-6'><h1>" + arr[i].country + "</h1></div>" +
//	    		"<div id='beer_company' class='col-sm-6 col-md-6 col-lg-6'><h1>" + arr[i].company + "</h1></div>" +
//	    		"<div id='beer_alchol' class='col-sm-6 col-md-6 col-lg-6'><h1>" + arr[i].alchol + "</h1></div>" +
//	    		"<div id='beer_volume' class='col-sm-6 col-md-6 col-lg-6'><h1>" + arr[i].volume + "</h1></div>"
//	    }
//		
//	    $("#info_wrap").html(contents)
//	    
//	    $("#noBtn").click(function(event) {
//	    	location.href = "../html/beerbear_beerdesc01.html"
//	    });
//    })
//}