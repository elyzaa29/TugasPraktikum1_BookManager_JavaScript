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

    });

    //Lengkapi Unit Test dibawah untuk seluruh buku yang ada di dalam list
    test('Test mendapatkan semua buku', () => {

    });
});
