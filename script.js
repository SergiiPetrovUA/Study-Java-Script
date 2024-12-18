

let ball = document.getElementById('ball');
let file = document.getElementById('field');
file.addEventListener('mouseover' , () => {file.style.cursor = 'pointer'});

file.addEventListener('mousemove' , cor);

function cor(event) {
    if(event.clientX > 38 && event.clientX < 196) {
        file.addEventListener('click' , move);
function move(event) {
    console.log("X : " + event.clientX + ' ; Y : '+ event.clientY  )
    ball.style = 'position:absolute;border:2px solid black';
    ball.style.left = event.clientX +  - ball.offsetWidth / 2 + 'px' ;
    ball.style.top = event.clientY +  - ball.offsetHeight / 2 + 'px'
}
    }
} 