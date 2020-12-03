const pink = document.querySelector('.pink');
const yellow = document.querySelector('.yellow');
const grey = document.querySelector('.grey');
const blue = document.querySelector('.blue');
const shopPg = document.querySelector('.shop-page');
const cartBtn = document.querySelector('.cart-btn');
const leftSidebar = document.querySelector('.left');
const mainContent = document.querySelector('.main-content');
const norm = '20px';
const big = '25px';


eventListener()

function eventListener() {
    blue.addEventListener('click', blueFunc)
    pink.addEventListener('click', pinkFunc)
    yellow.addEventListener('click', yellowFunc)
    grey.addEventListener('click', greyFunc)

}

function blueFunc() {
    bgChanger('#0392BF', '#ED48BA', '#B3D4E0');
    sizeChanger(blue, grey, yellow, pink);

}
function pinkFunc() {
    bgChanger('#ED48BA', '#0392BF', '#B3D4E0');
    sizeChanger(pink, grey, blue, yellow);
}
function yellowFunc() {
    bgChanger('#FBEC06', '#ED48BA', '#B3D4E0');
    sizeChanger(yellow, grey, blue, pink);
}
function greyFunc() {
    bgChanger('#B3D4E0', '#ED48BA', '#0392BF');
    sizeChanger(grey, blue, yellow, pink);
}


function bgChanger(bgColor, btnColor, sbColor) {
    shopPg.style.background = bgColor;
    cartBtn.style.background = btnColor;
    leftSidebar.style.background = sbColor;
}

function sizeChanger(a, b, c, d) {
    a.style.width = big;
    a.style.height = big;
    b.style.width = norm;
    b.style.height = norm;
    c.style.width = norm;
    c.style.height = norm;
    d.style.width = norm;
    d.style.height = norm;
}




/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}