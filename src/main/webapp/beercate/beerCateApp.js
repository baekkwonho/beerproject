
function ajaxBeerCateList() {
	$.getJSON("list.json", function(result) {
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var contents = ""
	    var arr = result.data
	    for (var i in arr) {
	    	contents += "<tr>" +
	    	  "<td>" + arr[i].no + "</td>" +
	    	  "<td>" + arr[i].name + "</td>" +
	    	  "</tr>"
	    }
		
		
	    $("#beerCateTable tbody").html(contents)
	   
    })
}




