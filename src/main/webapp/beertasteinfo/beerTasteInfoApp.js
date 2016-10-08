
function ajaxBeerTasteInfoList(no) {
	$.getJSON(serverAddr + "/beertasteinfo/list.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		
		var arr = result.data
		
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var template = Handlebars.compile($("#trTemplateText").html())
	    $("#beerTable tbody").html(template(result))
	    
	    
	    var radarData = {
		  labels : ["BITTER (쓴맛)","SOUR (신맛)","SWEET (단맛)","SPARKLE (탄산)","BODY (풍미)","AROMA (향미)"],
		  datasets : [
		    {
		      backgroundColor: "rgba(255,187,0,.7)",  //영역 전체배경색
		      borderColor: "rgba(255,0,0,.5)",        //영역 선
		    //  pointBorderColor: "rgba(0,84,255,1)", // 꼭지점 테두리 색
		    //  pointBackgroundColor: "rgba(29,219,22,1)", // 꼭지점 안에 색
		    //  data : [10,6,9,8,6,4]
		      data : [arr[0].bitter,arr[0].sour,arr[0].sweet,arr[0].sparkle,arr[0].body,arr[0].aroma]
		    }
		  ]
		}

		var radarOption = {
		  legend: false,  // 제목 없애기
	      scale : {
	    	pointLabels : {   //라벨글자 크기
	            fontSize: 14,
	            fontStyle: "bold",
	            fontColor: "rgba(255,187,0,1)"
	      },
	      ticks: {
	        min: 0,
	        max: 10,
	        stepSize: 1,
	        fontSize: 12,
	        fontStyle: "bold",
	        fontColor: "rgba(140,140,140,1)", //차트 점수색
	        //backdropColor: "rgba(0,255,255,1)"  // 차트점수배경색
	      },
	      gridLines: {
	        color: "rgba(140,140,140,1)" //차트라인 색
	      }
	      }
		}

		var ctx2 = document.getElementById("radarChart");
		var myNewChart = new Chart(ctx2, {
		  type: "radar",
		  data: radarData,
		  options : radarOption
		})
    })
}



