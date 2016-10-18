

function ajaxLoadBrandList() {
	$.getJSON(serverAddr + "/beerlist/brandList.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
    	var brandListTemplate = Handlebars.compile($("#beerBrandTemplate").html())
    	$("#beerBrand").html(brandListTemplate(result))
    	
	})
}

function ajaxLoadCateList() {
	$.getJSON(serverAddr + "/beerlist/cateList.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
    	var cateListTemplate = Handlebars.compile($("#beerCateTemplate").html())
    	$("#beerCate").html(cateListTemplate(result))
	})
}

function ajaxLoadCtryList() {
	$.getJSON(serverAddr + "/beerlist/ctryList.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
    	var ctryListTemplate = Handlebars.compile($("#beerCtryTemplate").html())
    	$("#beerCtry").html(ctryListTemplate(result))
	})
}

function ajaxLoadCompList() {
	$.getJSON(serverAddr + "/beerlist/compList.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		var compListTemplate = Handlebars.compile($("#beerCompTemplate").html())
		$("#beerComp").html(compListTemplate(result))
	})
}


$("#okBtn").click(function(event) {
	var beer = {
			brbrname: $("#beerBrand").val(),
			catename: $("#beerCate").val(),
			country: $("#beerCtry").val(),
			describe: $("#beerDesc").val(),
			company: $("#beerComp").val(),
			alchol: parseFloat($("#beerAchl").val()),
			volume: parseInt($("#beerVol").val())
	}
	
	
	if (beer.brbrname == 1) {
		beer.brbrname = $("#brandText").val()
	}
	
	if (beer.catename == 1) {
		beer.catename = $("#cateText").val()
	}
	
	if (beer.country == 1) {
		beer.country = $("#ctryText").val()
	}
	
	if (beer.company == 1) {
		beer.company = $("#compText").val()
	}
	
	
	 
	if (beer.brbrname == 0) {
		alert("Beer Brand(맥주 브랜드)를 선택 해 주세요.")
		return
	}else if (beer.catename == 0) {
		alert("Category(맥주 분류)를 선택 해 주세요.")
		return
	} else if (beer.country == 0) {
		alert("Country(제조 국가)를 선택 해 주세요.")
		return
	} else if (beer.describe.length == 0 || beer.describe.length > 20) {
		alert("Description(맥주 설명)을 입력 해 주세요\n 0~20자 내로 입력 해 주세요.")
		return
	} else if (beer.company == 0) {
		alert("Company(제조사)를 입력 해 주세요.")
		return
	} else if (beer.alchol == 0) {
		alert("Alcohol(도수)를 입력 해 주세요.")
		return
	} else if (isNaN(beer.alchol) == true) {
		alert("Alchol(도수)의 값을 숫자로 입력 해 주세요.")
		return
	} else if (beer.volume == 0) {
		alert("Volume(용량)을 입력 해 주세요.")
		return
	} else if (isNaN(beer.volume) == true) {
		alert("Volume(용량)의 값을 숫자로 입력 해 주세요.")
		return
	}
	
	
	ajaxAddBeer(beer)
	
})


function ajaxAddBeer(beer) {
	$.post(serverAddr + "/beerlist/add.json", beer, function(obj) {
		var result = obj.jsonResult
		
		if (result.state != "success") {
			alert ("맥주 등록 실패입니다.")
			return
		}
		
		window.location.href = "../beer/beerInfoApp.html"
		
	})
}


function checkBrandText() {
	var brandForm = document.forms['beerBrandForm']
	if (brandForm.Brand.value == '1') {
		brandForm.brandText.style.display = "inline"
		brandForm.Brand.style.display = "none"
	} else {
		brandForm.brandText.style.display = "none"
	}
}

function checkCateText() {
	var cateForm = document.forms['beerCateForm']
	if (cateForm.cate.value == '1') {
		cateForm.cateText.style.display = "inline"
		cateForm.cate.style.display = "none"
	} else {
		cateForm.cateText.style.display = "none"
	}
}

function checkCtryText() {
	var ctryForm = document.forms['beerCtryForm']
	if (ctryForm.country.value == '1') {
		ctryForm.ctryText.style.display = "inline"
		ctryForm.country.style.display = "none"
	} else {
		ctryForm.ctryText.style.display = "none"
	}
}

function checkCompText() {
	var compForm = document.forms['beerCompForm']
	if (compForm.company.value == '1') {
		compForm.compText.style.display = "inline"
		compForm.company.style.display = "none"
	} else {
		compForm.compText.style.display = "none"
	}
}


