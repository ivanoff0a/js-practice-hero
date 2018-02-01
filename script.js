$(document).ready(function() {

    var heroSpeech = "Hi, hope you're having a nice day!";
    
    $(".js-showHide").click(function() {
        $(".hero").toggleClass("-invisible");
    });
    $(".js-hello").click(function() {
        $(".bubble").toggleClass("-visible");
    });
    $(".js-hello").click(function() {
        $(".bubble").text(heroSpeech);
    });
});

