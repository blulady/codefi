const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    console.log(paragraph.innerText);
});

const meDiv = document.getElementById('myDiv');
meDiv.style.backgroundColor='lightblue';