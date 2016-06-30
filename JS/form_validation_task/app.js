
var valid = true;
function valid_title(selector) { 
	var pTitle = $(selector);
	var pTitle_val = $(selector).val();
	if ((pTitle_val.length == '') || (pTitle_val.length < 2)) {
		pTitle.next().addClass('active');
		valid = false;
	} else {
		valid = true;
		pTitle.next().removeClass('active');
	}
};	
function valid_sku(selector) { 
	var pSKU = $(selector);
	var pSKU_val = $(selector).val();
	if ((pSKU_val.length == '') || (pSKU_val.length < 2)) {
		pSKU.parent().next().addClass('active');
		valid = false;
	} else {
		valid = true;
		pSKU.parent().next().removeClass('active');
	}
	if ((!isNumber(pSKU_val)) && (pSKU_val.length > 0)) {
       valid = false;
       pSKU.parent().next().next().addClass('active');
    } 
	function isNumber(n) {
	   return !isNaN(parseFloat(n)) && isFinite(n);
	}
	var bool_point = /[.]$/.test(pSKU_val);  

	if (bool_point) {
		pSKU.parent().next().next().addClass('active');
		valid = false;
	}
};	
function valid_sku2(selector) { 
	var pSKU2 = $(selector);
	var pSKU2_val = $(selector).val();
	var regexpression = /^\d+\.?\.[0-9][0-9]$/;
	regexpression.test(pSKU2_val);
	if (regexpression.test(pSKU2_val)) {
	  bool = true;
	} else {
	  bool = false;
	}
	if (pSKU2_val % 1 == 0) {
		bool = true;
	}

	var bool_point = /[.]$/.test(pSKU2_val);     
	if (bool_point) {
		bool == false;
		valid = false;
	}
	if (bool == false) {
		pSKU2.parent().next().next().addClass('active');
		valid = false;

	} else if (pSKU2_val.length == '') {
		pSKU2.parent().next().addClass('active');
		valid = false;
	} else {
		valid = true;
		pSKU2.parent().next().removeClass('active');
		pSKU2.parent().next().next().removeClass('active');
	}	
	function isNumber(n) {
	   return !isNaN(parseFloat(n)) && isFinite(n);
	}
	var bool_point = /[.]$/.test(pSKU2_val);  
	   
	if (bool_point) {
		pSKU2.parent().next().next().addClass('active');
		valid = false;
	}
};	
$('#pTitle').focusout(function () { 
	valid_title(this);
});	
$('#pSKU').focusout(function () { 
	valid_sku(this);
});
$('#pSKU2').focusout(function () { 
	valid_sku2(this);
});	
$('#pTitle').focusin(function() {
	$(this).next().removeClass('active');
});

$('#pSKU, #pSKU2').focusin(function() {
	$(this).parent().next().removeClass('active');
	$(this).parent().next().next().removeClass('active');
});
$("#add-product-form").submit(function (e) { 	
	e.preventDefault();
});
$("#addToCart").mousedown(function () { 
    document.getElementById("addToCart").focus();  

	var pTitle_value = document.getElementById('pTitle').value;
	var pSKU_value = document.getElementById('pSKU').value;
	var pSKU2_value = document.getElementById('pSKU2').value;  
	var pDesc_value = document.getElementById('pDesc').value;
	var availability_text = '';	
	valid_title('#pTitle');	
	valid_sku('#pSKU');	
	valid_sku2('#pSKU2');	
	if (valid == true) {
	    var $check = $('#availability');
	    if ($check.prop('checked')) {
			availability_text = 'In-stock';
	    } else {
			availability_text = 'Out-of-stock';
	    }
		$('.table tr:last').after(
			'<tr><td>' + pSKU_value + '</td>' +
			'<td>' + pTitle_value + '</td>' +
			'<td>' + pSKU2_value + '$</td>' +
			'<td>' + pDesc_value + '</td>' +
			'<td>' + availability_text + '</td></tr>' 
		);
		$("input, textarea").val(""); 
		$("input[type=checkbox]").removeAttr('checked');
		$('.required').removeClass('active');
	}
});