function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}




var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {//if output has a value2
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) { //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}


document.onkeydown = function(event) {
    var key_press = event.keyCode;
    if(key_press == 49 || key_press == 97 ){
        document.getElementById('1').click();
    }
    else if(key_press == 50 || key_press == 98 ){
        document.getElementById('2').click();
    }
    else if(key_press == 51 || key_press == 99 ){
        document.getElementById('3').click();
    }
    else if(key_press == 52 || key_press == 100 ){
        document.getElementById('4').click();
    }
    else if(key_press == 53 || key_press == 101 ){
        document.getElementById('5').click();
    }
    else if(key_press == 54 || key_press == 102 ){
        document.getElementById('6').click();
    }
    else if(key_press == 55 || key_press == 103 ){
        document.getElementById('7').click();
    }
    else if(key_press == 56 || key_press == 104 ){
        document.getElementById('8').click();
    }
    else if(key_press == 57 || key_press == 105 ){
        document.getElementById('9').click();
    }
    else if(key_press == 48 || key_press == 96 ){
        document.getElementById('0').click();
    }
    else if(key_press == 13 || key_press == 187 ){
        document.getElementById('=').click();
    }
    else if(key_press == 107 ){
        document.getElementById('+').click();
    }
    else if(key_press == 109 || key_press == 189){
        document.getElementById('-').click();
    }
    else if(key_press == 106 ){
        document.getElementById('*').click();
    }
    else if(key_press == 111 ){
        document.getElementById('/').click();
    }
    else if(key_press == 8 ){
        document.getElementById('backspace').click();
    }
    else if(key_press ==67 ){
        document.getElementById('clear').click();
    }
    

    
}