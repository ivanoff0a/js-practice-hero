$(document).ready(function() {

    $(".js-plus").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) + Number(getSecondWord()));
        } else {
            if (checkInputData().isEmpty) {
                showBubble("Nothing in here");
            } else {
                showBubble(getFirstWord() + " " + getSecondWord());
            }
        }
    });

    $(".js-minus").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) - Number(getSecondWord()));
        } else {
            if (checkInputData().isEmpty) {
                showBubble("Nothing in here");
            } else {
                showBubble(getFirstWord() + " " + getSecondWord());
            }
        }
    });

    $(".js-multiply").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) * Number(getSecondWord()));
        } else {
            if (checkInputData().isEmpty) {
                showBubble("Nothing in here");
            } else {
                showBubble(getFirstWord() + " " + getSecondWord());
            }
        }
    });

    $(".js-divide").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) / Number(getSecondWord()));    
        } else {
            if (checkInputData().isEmpty) {
                showBubble("Nothing in here");
            } else {
                showBubble(getFirstWord() + " " + getSecondWord());
            }

        	// } else if (checkInputData().isNumeric(false)){
         //        showBubble("Use numbers instead letters!");
         //    }
        }

		if(Number(getSecondWord() === 0)) {
        	showBubble("What's wrong with you?");
   		}
    });

    // =================================================================
    // =================================================================

    function checkInputData() {
        // если буквы или пусто, то вывод пиши цифры
        // иначе
        // проведи операцию
        if ($.isNumeric(getFirstWord()) && $.isNumeric(getFirstWord())) {
            return {
                isNumber: true
            };
        } else if (getFirstWord() === "" && getSecondWord() === "") {
            return {
                isNumber: false,
                isEmpty: true
            };
        } else {
            return {
                isNumber: false,
                isEmpty: false
            };
        }
    }

    function getFirstWord() {
        return $(".js-text1").val();
    }


    function getSecondWord() {
        return $(".js-text2").val();
    }

    function showBubble(text) {
        $(".bubble").text(text);
        $(".bubble").addClass("-visible");

        setTimeout(function() {
            $(".bubble").removeClass("-visible");
        }, 2000);
    }

});

