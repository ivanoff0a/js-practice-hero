$(document).ready(function() {

    $(".js-hello").click(function() {
        // var inputText = $(".js-text").val();

        // if (inputText === "") {
        //     showBubble("There is nothing in here!");

        // } else {
        //     showBubble(inputText);

        // }
        // showBubble($(".js-text1").val() + $(".js-text2").val());
        
        $(".js-hello").click( function () { // Событие нажатия на кнопку "Расчёт"
		var action = $(".sign").val(); // Получаем значение действия, которое нужно выполнить
		var first = $(".js-text1").val() * 1; // Переменная первого числа
		var second = $(".js-text2").val() * 1; // Переменная второго числа
		var result; // Переменная результата
		if (action == '+') { // Если действие - сложение
			result = first + second; //  складываем
		}
		else if (action == '-'){ // Если действие вычитание
			result = first - second; // вычитаем
		}
		else if (action == '*'){ // Если действие умножение
			result = first * second; // умножаем
		}
		else if (action == '/'){ // Если действие деления
			result = first / second; // делим
		}
		$(".js-result").val(result); // записываем результат
		// showBubble($(".bubble").val(result));
		});
   	});

    function showBubble(text) {
        $(".bubble").text(text);
        $(".bubble").addClass("-visible");

        setTimeout(function() {
            $(".bubble").removeClass("-visible");
        }, 2000);
    }

});

