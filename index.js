$(function(){
    //this code runs after page is fully loaded
    $('#nameform').on('submit', function(evt){
        evt.preventDefault();
        $('.jumbotron').removeClass('d-none');
        $('.jumbotron').show();
        return false;
    });
});