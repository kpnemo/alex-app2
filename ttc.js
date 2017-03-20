$(document).ready(function() {

    $('.col').on('click', function (ev) {
        ev.preventDefault();

        var col= $('.col');

        if ($(this).hasClass('empty')) {
            $(this).removeClass('empty').addClass('X');
            console.log('i have drawn a X');

            var emptyCols = col.filter('.col.empty');
            var index = Math.floor(Math.random() * emptyCols.length);
            $(emptyCols[index]).removeClass('empty').addClass('O')
            console.log('Computer have drawn a O');

        } else {
            console.log('space is taken');
            return;
        }

            var modal=$('#myModal');

        if($('#1').hasClass('X') && $('#2').hasClass('X') && $('#3').hasClass('X') ||
            $('#4').hasClass('X') && $('#5').hasClass('X') && $('#6').hasClass('X') ||
            $('#7').hasClass('X') && $('#8').hasClass('X') && $('#9').hasClass('X')){
            console.log('X wins with a row');
            modal.modal('show');
            modal.one('hidden.bs.modal', function (e) {
                console.log('game is clear to restart');
                $('.col').removeClass('X').addClass('empty');
                $('.col').removeClass('O').addClass('empty');
                modal.off();
        });
        }

        if($('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') ||
            $('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') ||
            $('#3').hasClass('X') && $('#6').hasClass('X') && $('#9').hasClass('X')){
            console.log('X wins with a column');
            modal.modal('show');
            modal.one('hidden.bs.modal', function (e) {
                console.log('game is clear to restart');
                $('.col').removeClass('X').addClass('empty');
                $('.col').removeClass('O').addClass('empty');
                modal.off();
            });
        }

        if($('#1').hasClass('X') && $('#5').hasClass('X') && $('#9').hasClass('X') ||
            $('#3').hasClass('X') && $('#5').hasClass('X') && $('#7').hasClass('X')){
            console.log('X wins with a diagnol');
            modal.modal('show');
            modal.one('hidden.bs.modal', function (e) {
                console.log('game is clear to restart');
                $('.col').removeClass('X').addClass('empty');
                $('.col').removeClass('O').addClass('empty');
                modal.off();
            });
        }



    });

});





