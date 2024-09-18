let nexColor = document.getElementById('color-box')
let button = document.getElementById('change-color-btn')


document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click' , () => {

    nexColor.style.backgroundColor = getRandomColor()
    })
})


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}