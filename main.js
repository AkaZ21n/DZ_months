const circles = document.querySelectorAll(".circle")
console.log(circles);

let color = prompt('Choose one color');

switch (color) {
    case 'red':
        circles[0].style.background = 'red';
        console.log('Stop');
        break;
    case 'yellow':
        circles[1].style.background = 'yellow';
        console.log('Wait');
        break;
        case 'green':
        circles[2].style.background = 'green';
        console.log('Go');
        break;
        default:
            console.log('Error');
    }
