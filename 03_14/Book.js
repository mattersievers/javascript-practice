class Book{
    constructor(
        title,
        author,
        pages,
        beenRead
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.beenRead = beenRead;
}  
toggleBeenRead(){
    this.beenRead = !this.beenRead
}  
}

export default Book;
