// console.log(1);
// setTimeout(() => {
//     console.log('This is an example of async code!');
// } 2000)

// console.log(2);
// console.log(3);

// fetch data from a server
async function fetchPosts() {
    // URL
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    const response = await fetch(url); // <script src="async-await.js"
    console.log(response);
    const data = await response.json();
    console.log(data);
}

fetchPosts(); // will get a promise

async function fetchPosts2(){
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR ", error)
    }
}
