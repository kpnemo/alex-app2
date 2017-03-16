function _when_somebody_click_the_validate_button () {
	if($( ".action-button" ).attr('disabled') === 'disabled'){
		return;
	}

	var myButton = $(this);
	var myInput = $('#validate_number');
	var inputValue = myInput.val();
	var patt = new RegExp(/^[\d\.]+$/);
	var myWrapper = $('#state-wrapper');

	console.log('my value - ' + inputValue);
	console.log(patt.exec(inputValue));


	if(patt.exec(inputValue) != null){
		myWrapper.removeClass('has-error').addClass('has-success');
		myButton.attr('disabled', true);
	} else {
		myWrapper.removeClass('has-success').addClass('has-error');
		$('#myModal').modal({backdrop: 'static', show: true});
	}

	var stateClass = (patt.exec(inputValue) != null)? 'has-success' : 'has-error';
	myWrapper.addClass(stateClass);
}

function getAndShowData(){
	var _myModal = $('#myModalData');
	var _tableWrapper = _myModal.find('table');

	$.getJSON('/data.json', function(data){
		_tableWrapper.find('tbody').html(' ');
		for(i=0; i < data.total; i++){
			var b = i+1;
			var _tr = $('<tr></tr>');
			_tr.append('<th>' + b + '</th>');
			_tr.append('<td>' + data.Collection[i].name + '</td>');
			_tr.append('<td>' + data.Collection[i].age + '</td>');

			_tableWrapper.find('tbody').append(_tr);
		}
		$('#myModalData').modal({backdrop: 'static', show: true});
	});
};

$(document).ready(function(){
	$( ".action-button" ).click(_when_somebody_click_the_validate_button);
	$( ".action-button" ).on('alexCustom', _when_somebody_click_the_validate_button);

	$('#validate_number').keypress(function(event) {
		var keycode = event.keyCode || event.which;
		console.log(keycode);
		if(keycode == '13') {
			$( ".action-button" ).trigger('alexCustom');
			return false;
		}
	});
});


$(document).ready(function(){
	console.log('document ready');

	$(window).on('red', function(){
		$('.connected').addClass('red');
		$( ".action-button" ).click();
	});

	$('.fireEvent').on('click', function(ev){
		ev.preventDefault();
		console.log('Clicked');
		$(window).trigger('red');
	});

	$('.showData').on('click', function(ev){
		ev.preventDefault();
		getAndShowData();
	});

});