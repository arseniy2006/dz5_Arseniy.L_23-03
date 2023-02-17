function filterBooks(...books) {
    let yBooks = [];
    let otherBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].includes('у')) {
            yBooks.push(books[i]);
        } else {
            otherBooks.push(books[i]);
        }
    }
    console.log("Книги, в названиях которых есть буква 'у':");
    console.log(yBooks);
    console.log("Остальные книги:");
    console.log(otherBooks);

}
filterBooks('1984', 'To Kill a Mockingbird' ,'Pride and Prejudice' , 'The Great Gatsby' , 'The Catcher in the Rye', 'Moby-Dick', 'Jane Eyre', 'The Picture of Dorian Gray', 'The Adventures of Huckleberry Finn', 'The Lord of the Rings');



function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString("привет"));


