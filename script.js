$(document).ready(function() {

    $(".js-hello").click(function() {
        // var inputText = $(".js-text").val();

        // if (inputText === "") {
        //     showBubble("There is nothing in here!");

        // } else {
        //     showBubble(inputText);

        // }
        showBubble($(".js-text1").val() + $(".js-text2").val());
    });

    function showBubble(text) {
        $(".bubble").text(text);
        $(".bubble").addClass("-visible");

        setTimeout(function() {
            $(".bubble").removeClass("-visible");
        }, 2000);
    }

});

