let input = document.getElementById('display');
        let buttons = document.querySelectorAll('button');
        let string = "";
        let numbers = [];
        let operator = "";

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target.innerHTML == "=") {
                    try {
                        numbers = string.split(/\+|\-|\*|\//).map(Number);
                        operator = string.match(/\+|\-|\*|\//)[0];

                        if (operator == '+') {
                            input.value = numbers[0] + numbers[1];
                        } else if (operator == '-') {
                            input.value = numbers[0] - numbers[1];
                        } else if (operator == '*') {
                            input.value = numbers[0] * numbers[1];
                        } else if (operator == '/') {
                            if (numbers[1] !== 0) {
                                input.value = numbers[0] / numbers[1];
                            } else {
                                input.value = "Error: Division by zero";
                            }
                        }
                    } catch (error) {
                        input.value = 'Error';
                        console.error('Error:', error);
                    }
                } else if (e.target.innerHTML == 'C') {
                    string = "";
                    input.value = string;
                } else {
                    string += e.target.innerHTML;
                    input.value = string;
                }
            });
        });