$(document).ready(function() {

    let hero = {
        age: 20,
        name: "XXXtentacion",
        job: "Musician",

        params: {
            height: 180,
            weight: 70,
            gender: "Male",
            race: "Afro American"
        },

        powers: {
            mainPower: "Great Songs",
            secondaryPower: "Run"
        }
    };

    $(".js-object").click(function() {
        showBubbleWithBlock('<div class="bubble-test"> Janseh Onfroy ' + hero.name + '!</div>');
    });

    let songs = [" Jocelyn Flores", " Red Light", " $aUcE", " Roll In Peace"];

    $(".js-array").click(function() {
	    	if(checkInputData().isEmpty) {
	    		showBubble("Nothing In Here!");
	    		songs.unpush(getSecondWord());
	    	}
        songs.push(getSecondWord());
        $(".massive-panel").append('<div class="test-array">' + getSecondWord() + '</div>');
    });

    for (let i = 0; i <songs.length; i++) {
        $(".massive-panel").append('<div class="test-array">' + songs[i] + '</div>')
    };


    $(".js-plus").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) + Number(getSecondWord()));
        } else {
            showNotNumericData();
        }

        if (!checkInputData().isNumber) {
            showBubble("Use numbers instead letters!");
        }
    });

    $(".js-minus").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) - Number(getSecondWord()));
        } else {
            showNotNumericData();
        }

        if (!checkInputData().isNumber) {
            showBubble("Use numbers instead letters!");
        }
    });

    $(".js-multiply").click(function() {
        if (checkInputData().isNumber) {
            showBubble(Number(getFirstWord()) * Number(getSecondWord()));
        } else {
            showNotNumericData();
        }

        if (!checkInputData().isNumber) {
            showBubble("Use numbers instead letters!");
        }
    });

    $(".js-divide").click(function() {
        if (checkInputData().isNumber) {
            if(Number(getSecondWord() === "0")) {
                showBubble("What's wrong with you?");
            } else {
                showBubble(Number(getFirstWord()) / Number(getSecondWord()));
            }
        } else {
            showNotNumericData();
        }

        if (!checkInputData().isNumber) {
            showBubble("Use numbers instead letters!");
        }
     });

    // =================================================================
    // =================================================================

    function showNotNumericData() {
        if (checkInputData().isEmpty) {
                showBubble("Nothing in here");
            } else {
                showBubble(getFirstWord() + " " + getSecondWord());
            }
    }

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

    function showBubbleWithBlock(block) {
	    $(".bubble").append(block);
	    $(".bubble").addClass("-visible");

	    setTimeout(function() {
	        $(".bubble").removeClass("-visible");
	    }, 2000);
    }
});

