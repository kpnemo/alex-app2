        function MakeAMove () {

            var col = $('.col');

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
            checkIfUserWon();
            checkIfComputerWon();

        }








        function checkIfUserWon() {
                var xWon = $('#myModalX');

                if ($('#1').hasClass('X') && $('#2').hasClass('X') && $('#3').hasClass('X') ||
                    $('#4').hasClass('X') && $('#5').hasClass('X') && $('#6').hasClass('X') ||
                    $('#7').hasClass('X') && $('#8').hasClass('X') && $('#9').hasClass('X')) {
                    console.log('X wins with a row');
                    xWon.modal('show');
                    xWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        xWon.off();
                    });
                }

                if ($('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') ||
                    $('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') ||
                    $('#3').hasClass('X') && $('#6').hasClass('X') && $('#9').hasClass('X')) {
                    console.log('X wins with a column');
                    xWon.modal('show');
                    xWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        xWon.off();
                    });
                }

                if ($('#1').hasClass('X') && $('#5').hasClass('X') && $('#9').hasClass('X') ||
                    $('#3').hasClass('X') && $('#5').hasClass('X') && $('#7').hasClass('X')) {
                    console.log('X wins with a diagnol');
                    xWon.modal('show');
                    xWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        xWon.off();
                    });
                }

        }

        function checkIfComputerWon() {
                var oWon = $('#myModalO');

                if ($('#1').hasClass('O') && $('#2').hasClass('O') && $('#3').hasClass('O') ||
                    $('#4').hasClass('O') && $('#5').hasClass('O') && $('#6').hasClass('O') ||
                    $('#7').hasClass('O') && $('#8').hasClass('O') && $('#9').hasClass('O')) {
                    console.log('O wins with a row');
                    oWon.modal('show');
                    oWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        oWon.off();
                    });
                }

                if ($('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O') ||
                    $('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') ||
                    $('#3').hasClass('O') && $('#6').hasClass('O') && $('#9').hasClass('O')) {
                    console.log('O wins with a column');
                    oWon.modal('show');
                    oWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        oWon.off();
                    });
                }

                if ($('#1').hasClass('O') && $('#5').hasClass('O') && $('#9').hasClass('O') ||
                    $('#3').hasClass('O') && $('#5').hasClass('O') && $('#7').hasClass('O')) {
                    console.log('O wins with a diagnol');
                    oWon.modal('show');
                    oWon.one('hidden.bs.modal', function (e) {
                        console.log('game is clear to restart');
                        $('.col').removeClass('X').addClass('empty');
                        $('.col').removeClass('O').addClass('empty');
                        oWon.off();
                    });
                }

        }



        $(document).ready(function (){

            $('.col').on('click',MakeAMove)


        })

