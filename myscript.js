const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
/*
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));
*/


const compose = (...fns) => (list) => fns.reduceRight((result, fn) => fn(result), list);
//zad6
const filterGenreEndsWithY = (list) => list.filter((book) => book.genre.endsWith('y'));
const filterEvenPages = (list) => list.filter((book) => book.pages % 2 == 0);
const mapToTitle = (list) => list.map(({title}) => title);
const lettersInTitles = (titles) => titles.join('').replaceAll(' ', '').length;

const countLettersWithFilters = compose(lettersInTitles, mapToTitle, filterEvenPages, filterGenreEndsWithY);

console.log(countLettersWithFilters(books));
//zad7
const filterTitleIncludesNumber = (list) => list.filter((book) => /\d/.test(book.title));
const filterOddPages = (list) => list.filter((book) => book.pages % 2 == 1);
const filterPositiveRating = (list) => list.filter((book) => book.rating > 5);
const countBooks = (list) => list.length;

const countBooksWithFilters = compose(countBooks, filterPositiveRating, filterOddPages, filterTitleIncludesNumber);

console.log(countBooksWithFilters(books));

//zad8
const sortByTitleLength = (list) => list.sort((title1, title2) => title1.length - title2.length).reverse();
const secondBiggest = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].length < list[0].length && list[i].length > list[i+1].length) {
            return list[i];
        }
    }
};

const secondLongestTitle = compose(secondBiggest, sortByTitleLength, mapToTitle);

console.log(secondLongestTitle(books));