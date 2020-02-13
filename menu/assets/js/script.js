$(function () {
    $('.sec__elem').hover(
        function(){
            $('.el2').fadeTo('fast', 1);
        },
        function(){
            if ($('.el2:hover').css('opacity') == 1) {
                $('.el2').hover(
                    function(){
                        // $('.el2').fadeTo('fast', 1);
                        $('.el2').css('display' , 'block');
                        $('.back').fadeTo('fast', 0.5);
                    },
                    function(){
                        // $('.el2').fadeTo('fast', 0);
                        $('.el2').css('display' , 'none');
                        $('.back').fadeTo('fast', 0);
                    }
                )
            }else{
                $('.el2').fadeTo('fast', 0); 
            }
        }
        
    )
})


$(function () {
    $('.four_elem').hover(
        function(){
            $('.el4').fadeTo('fast', 1);
        },
        function(){
            if ($('.el4:hover').css('opacity') == 1) {
                $('.el4').hover(
                    function(){
                        // $('.el2').fadeTo('fast', 1);
                        $('.el4').css('display' , 'block');
                        $('.back').fadeTo('fast', 0.5);
                    },
                    function(){
                        // $('.el2').fadeTo('fast', 0);
                        $('.el4').css('display' , 'none');
                        $('.back').fadeTo('fast', 0);
                    }
                )
            }else{
                $('.el4').fadeTo('fast', 0); 
            }
        }
        
    )
})


$(function(){
    $('.topmenu').hover(
        function(){
            $('.back').fadeTo('fast', 0.5);
        },
        function(){
            $('.back').fadeTo('fast', 0);
        }
    )
})
