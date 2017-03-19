function press_on_brick(){
        var col= $('.col');

            if((col).hasClass('empty')) {
                $(this).removeClass('empty').addClass('iks');
                console.log('i have drawn an iks');
            };


};




$(document).ready(function() {
    $('.col').on('click', press_on_brick);

});



