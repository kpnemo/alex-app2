/**
 * Created by mike on 20/03/2017.
 */

var last_move = null;

var win_recipie = [
	['#cell_1', '#cell_2', '#cell_3'],
	['#cell_4', '#cell_5', '#cell_6'],
	['#cell_7', '#cell_8', '#cell_9'],
	['#cell_1', '#cell_4', '#cell_7'],
	['#cell_2', '#cell_5', '#cell_8'],
	['#cell_3', '#cell_6', '#cell_9'],
	['#cell_1', '#cell_5', '#cell_9'],
	['#cell_3', '#cell_5', '#cell_7']
];

var playerScore = 0;
var computerScore = 0;
var playerRecord = $('#myScore span');
var computerRecord = $('#yourScore span');

function is_winner(){

	var we_have_a_winner = false;

	for(i=0; i<win_recipie.length; i++){
		var _queryString = win_recipie[i].join(',');
		var _elements = $(_queryString);

		var _isWinnerRow = ((_elements.filter('.X').length == 3) || (_elements.filter('.O').length == 3));
		we_have_a_winner = _isWinnerRow;
		if(_isWinnerRow) break;
	}
	console.log('win have a winner', we_have_a_winner);



	if(we_have_a_winner){
		return true;
	} else {
		return false;
	}




};

function clear_game(){
	var map = $('#map');
	map.find('.cell').each(function(index){
		$(this).removeClass('X').removeClass('O').addClass('empty');
	});
};

function _game_over(){
	console.log('game over');
    recordScore();

    var title = $('#myModal .modal-title');
	var body = $('#myModal .modal-body');


	var _clonedMap = $('#map').clone();
	_clonedMap.find('.cell').off('click');
	body.html(_clonedMap);
	body.append('<p>' + last_move + ' is a winner</p>');
	title.html('Gave Over');

	$('#myModal').modal('show');
	$('#myModal').on('hide.bs.modal', function(){
		$('#myModal .modal-body').empty();
		clear_game();


	});
}

function is_danger() {
    var we_have_danger = false;
    var hit = null;

	for (i = 0; i < win_recipie.length; i++) {
		console.log('i am inside loop', i);

        var _dangerString = win_recipie[i].join(',');
        var _elDanger = $(_dangerString);

        var _isDangerRow = ((_elDanger.filter('.X').length == 2) && _elDanger.filter('.empty').length > 0);
        we_have_danger = _isDangerRow;
        if (_isDangerRow) {
        	hit = i;
        	break;
        }
    }

    return {is_danger: we_have_danger, hit: hit};
};

function cpu_move(){
    console.log('kill all humans');
	var _is_danger = is_danger();

    if(_is_danger.is_danger){
    	console.log('i am inside danger');

        var dangerCells = win_recipie[_is_danger.hit].join(',');
		console.log('danger cells are:', dangerCells);
        var SpotToPlay = $(dangerCells);
		console.log(SpotToPlay);

		var goingCrazy = (SpotToPlay.filter('.empty')).eq(0);

		console.log(goingCrazy);

        goingCrazy.trigger('click', [true]);
        console.log('the cell to block is:', goingCrazy );
	}

	else{
		var availableCells = $('#map').find('.empty');

        var random_cell = Math.floor((Math.random() * availableCells.length));
        $(availableCells[random_cell]).trigger('click', [true]);
	};

};

function is_click_valid(el){
	if(el.hasClass('empty')) return true;
	return false;
};

function handleClick(ev, isCPUEvent){
	ev.preventDefault();

	var _isCpu = isCPUEvent || false;
	var isHuman = (_isCpu)? false : true ;
	var el = $(this);

	last_move = (isHuman)? 'human': 'cpu';

	if(is_click_valid(el)){
		el.removeClass('empty');

		if(isHuman){
			el.addClass('X');
		} else {
			el.addClass('O');
		}

		if(is_winner()){
			_game_over();
		} else if(isHuman) {
			cpu_move();
		}

	} else {
		return false;
	}
};

function recordScore (){

    if(last_move == 'human'){
        playerScore ++;
        console.log('player wins :', playerScore);
    } else {
        computerScore ++;
        console.log('computer wins :', computerScore);
    }


		playerRecord.text(playerScore);
		computerRecord.text(computerScore);
};

function restartGame() {
	$('#restartGame').on('click', clear_game);
};




function init(){
	$('.cell').on('click', handleClick);
};

$(function(){
	init();
	restartGame();
});




