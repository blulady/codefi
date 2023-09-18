// selectors
const btn = document.querySelector('#btn');

// events
// what: when a user hovers ove the button -> mv botton somewhere on the screen
btn.addEventListener('mouseenter', goBtnWild);

// functions
function goBtnWild() {
    // create a random value "top" value on the screen
    const offsetTop = Math.random() * (window.innerHeight - btn.clientHeight);
    // create a random value "top" value on the screen
    const offsetLeft = Math.random() * (window.innerWidth - btn.clientWidth);
    // UPDATE TOP & LEFT VALUES OF THE BUTTON
    btn.style.top = offsetTop + 'px';
    btn.style.left = offsetLeft + 'px';
}

function youWin() {
    // have the button stop moving
    btn.removeEventListener('mouseenter');
    //alert the user they won
    alert('you win!');
}