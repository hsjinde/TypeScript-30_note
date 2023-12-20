"use strict";
let myBook = {
    isbn: "32984565",
    tile: "AABBC",
    author: "Tom",
    year: 2009
};
function printBook(book) {
    console.log(`Tile:${book.tile}`);
}
printBook(myBook);
