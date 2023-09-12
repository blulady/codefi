class Books{
    #isbn
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.#isbn = Math.floor(Math.random() * 1000);
    }
}