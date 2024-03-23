$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        let windowHeight = $(this).height();

        $('.apparition').each(function (){
            let element = $(this);
            let position = element.offset().top;
            let elementHeight = element.outerHeight();

            if(position < (scrollTop + windowHeight) && (position + elementHeight) > scrollTop){
                element.removeClass('invisible');
            }else{
                element.addClass('invisible');
            }
        });

    });

});