$('.choose').click(function(){
    var dropBlock = $(this).parent().find('.drop');
    if( dropBlock.is(':hidden') ) {

        dropBlock.slideDown();

        $(this).addClass('active');

        $('.drop').find('li').click(function(){

            var selectResult = $(this).find('a').data('value');
            var selectResultName = $(this).find('a').html();
            $(this).parent().parent().find('input').val(selectResult);
            $(this).parent().parent().find('.choose').removeClass('active').html(selectResultName);

            dropBlock.slideUp();
        });

    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }

    return false;
});
