javascript:
$(".left-sidebar--sticky-container").hide(); 
$(".site-footer").hide();
$(".ml12").hide();
$(".show-votes").hide();

$(".accepted-answer").css('background', '#c0e1d2'); 

$("script").each(function(){
    $(this).replaceWith('<script>if (1==0){  }</script>');
});