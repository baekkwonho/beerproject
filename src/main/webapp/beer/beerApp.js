

function ajaxBeerList() {
	$.getJSON(serverAddr + "/beer/list.json", function(obj) {
		var result = obj.jsonResult
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
	    	location.href = "beerDetailApp.html?no=" + $(this).attr("data-no")
	    });
    })
}

