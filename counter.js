let count = 0;

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const countDisplay = document.getElementById('count');
const resetButton = document.getElementById('reset');


incrementButton.addEventListener('click', function increment() {
    count += 1;
    countDisplay.innerText = count;
})

decrementButton.addEventListener('click', function decrement() {
    if(count <= 0){
        stop;
    }else{
        count -= 1;
        countDisplay.innerText = count;}
})


resetButton.addEventListener('click', function reset() {
    count = 0;
    countDisplay.innerText = count;
})
