// // test one line at a time
// // start with selectors

// const btn = document.querySelector('.btn');


// // next are functions
// //create function & test it before hooking it up
// // out put change background color 
// function changeBGColor() {
//     document.body.style.backgroundColor = 'blue';
// }

// // *events*
// //what: when the button is clicked -> change the background color
// btn.addEventListener('click', changBGColor)

//multiple buttons

const btns = document.querySelectorAll('.btn');


// next are functions
//create function & test it before hooking it up
// out put change background color 
function changeBGColor(colorStr) {
    const color = e.target.getAttribute('data-color');
    document.body.style.backgroundColor = colorStr;
}

// *events*
//what: when the button is clicked -> change the background color
btns.forEach((button) => 
    button.addEventListener('click', (e) => {
        const color = e.target.getAttribute('data-color');
        changeBGColor(color);
    }),
);

changeBGColor('black');
