class Books{
    #isbn
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.#isbn = Math.floor(Math.random() * 1000);
    }
    get title() {
        return this.title;
    }
    get author() {
        return this.author;
    }
    get yearPublished() {
        return this.yearPublished;
    }
    get title() {
        return this.title;
    }
    get title() {
        return this.title;
    }
}