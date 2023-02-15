let a = 0, b = 0, c;

while (true) {

    while (true) {
        a = prompt('Введите первое число: ');
        a = Number(a);
        if (isNaN(a)) {
            alert('Нужно вводить число!!!');
            continue;
        } else {
            break;
        }
    }

    while (true) {
        b = prompt('Введите второе число: ');
        b = Number(b);
        if (isNaN(b)) {
            alert('Нужно вводить число!!!');
            continue;
        } else {
            break;
        }
    }
    switch (prompt('Введите операцию: ')) {
        case "+":
            alert(a + b);
            break;
        case "-":
            alert(a - b);
            break;
        case "/":
            if (b == 0) {
                alert('Делить на "0" нельзя!!!');
                continue;
            } else {
                alert(a / b);
                break;
            }
        case "*":
            alert(a * b);
            break;
    }
}