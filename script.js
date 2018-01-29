$(document).ready(function() {

    var heroSpeech = "BRUUUUUUDAH";
    $(".js-showHide").click(function() {
        $(".hero").toggleClass("-invisible")
    });
    $(".js-hello").click(function() {
        $(".circle").text(heroSpeech);
    });
});

