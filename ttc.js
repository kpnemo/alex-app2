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
    });

});





