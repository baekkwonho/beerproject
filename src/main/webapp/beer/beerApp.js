
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
	    	  "<td>" + arr[i].no + "</td>" + 
//	    	  "<td>" + arr[i].cateno + "</td"> +
//	    	  "<td>" + arr[i].brbrno + "</td>" +
	    	  "<td>" + arr[i].describe + "</td>" +
	    	  "<td>" + arr[i].country + "</td>" +
	    	  "<td>" + arr[i].company + "</td>" +
	    	  "<td>" + arr[i].alchol + "</td>" +
	    	  "<td>" + arr[i].volume + "</td>" +
	    	  "</tr>"
	    }
		
		console.log(arr[0])
		
		
	    $("#beerTable tbody").html(contents)
	   
    })
}





function ajaxBeerOneList() {
	$.getJSON("detail.json", function(result) {
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var contents = ""
	    var arr = result.data
	    for (var i in arr) {
	    	contents += "<tr>" +
	    	  "<td>" + arr[i].no + "</td>" + 
	    	  "<td>" + arr[i].catenm + "</td"> +
	    	  "<td>" + arr[i].brbrnm + "</td>" +
	    	  "<td>" + arr[i].br_desc + "</td>" +
	    	  "<td>" + arr[i].ctry + "</td>" +
	    	  "<td>" + arr[i].comp + "</td>" +
	    	  "<td>" + arr[i].achl + "</td>" +
	    	  "<td>" + arr[i].vol + "</td>" +
	    	  "</tr>"
	    }
	    $("#beerTable tbody").html(contents)
	   
    })
}



