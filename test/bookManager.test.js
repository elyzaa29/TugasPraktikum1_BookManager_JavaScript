const Book = require('../book');
const BookManager = require('../bookManager');

describe('BookManager', () => {
    let bookManager;

    beforeEach(() => {
        bookManager = new BookManager();
    });

    test('Test menambahkan buku', () => {
        const book = new Book('Test Book', 'Test Author', 2023);
        bookManager.addBook(book);
        expect(bookManager.getBookCount()).toBe(1);
    });

    test('Test menghapus buku yang ada', () => {
        const book = new Book('To Remove', 'Author', 2023);
        bookManager.addBook(book);

        const removed = bookManager.removeBook('To Remove');
        expect(removed).toBe(true);
        expect(bookManager.getBookCount()).toBe(0);
    });

    //Lengkapi Unit Test dibawah untuk buku yang memang tidak terdapat pada list
    test('Test menghapus buku yang tidak ada', () => {
        const removed = bookManager.removeBook('Dunia Sophie');
        expect(removed).toBe(false);
        expect(bookManager.getBookCount()).toBe(0);

    });

    //Lengkapi Unit Test dibawah untuk bmcari buku berdasarkan penulis
    test('Test mencari buku berdasarkan author', () => {
        const book1 = new Book('No Longer Human', 'Osamu Dazai', 1948);
        const book2 = new Book('Run Melos', 'Osamu Dazai', 1937);
        const book3 = new Book('The Brother Karamazov', 'Fyodor Dostoevsky', 1889);

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const found = bookManager.findBooksByAuthor('Osamu Dazai');
        expect(found.length).toBe(2);
        expect(found[0].title).toBe('No Longer Human');
        expect(found[1].title).toBe('Run Melos');

    });

    //Lengkapi Unit Test dibawah untuk seluruh buku yang ada di dalam list
    test('Test mendapatkan semua buku', () => {
        const book1 = new Book ('Bumi', 'Tere Liye', 2014);
        const book2 = new Book ('Misteri Soliter', 'Jostein Gaarder', 1990);

        bookManager.addBook(book1);
        bookManager.addBook(book2);

        const allBooks = bookManager.getAllBooks();
        expect(allBooks.length).toBe(2);
        expect(allBooks).toContain(book1);
        expect(allBooks).toContain(book2);
    });
});
