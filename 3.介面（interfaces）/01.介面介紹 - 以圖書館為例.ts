interface Book{
    isbn:string,
    tile:string,
    author:string, 
    year:number
}

let myBook: Book = {
    isbn : "32984565",
    tile: "AABBC",
    author : "Tom",
    year: 2009
}

function printBook(book:Book) {
    console.log(`Tile:${book.tile}`);
}
printBook(myBook);