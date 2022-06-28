import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../views/book-details.cmp.js'
import bookEdit from '../views/book-edit.cmp.js'
import bookFilter from '../cmps/book-filter-cmp.js'

export default {
	template: `
  <!-- <div :class="[{selectedBook:selectedBook}, 'screen']" ></div> -->
  <div class = "screen" :class="{selectedBook:selectedBook}" @click="selectedBook = null"></div>
  <section class="book-app">
  <h1>Books:</h1>
    <book-filter class="filter-books" @filtered="filterBook" :books="books"/>
    <book-details v-if="selectedBook"  @close="selectedBook = null" :book="selectedBook" />
    <book-list v-else @removed="removeBook" @selected="selectBook" :books="booksToShow" />
  </section>
`,
	components: {
		bookList,
		bookDetails,
		bookEdit,
		bookFilter,
	},
	data() {
		return {
			books: bookService.query(),
			selectedBook: null,
			filterBy: null,
		}
	},
	methods: {
		removeBook(BookId) {
			bookService.remove(BookId)
			const idx = this.Books.findIndex((book) => book.id === bookId)
			this.Books.splice(idx, 1)
		},
		selectBook(book) {
			this.selectedBook = book
		},
		saveBook(book) {
			this.Books.push(book)
		},
		filterBook(filterBy) {
			this.filterBy = filterBy
		},
		set() {},
	},
	computed: {
		booksToShow() {
			console.log('here')
			if (!this.filterBy) return this.books
			console.log(this.filterBy.price)
			const regex = new RegExp(this.filterBy.title, 'i')
			return this.books.filter((book) => regex.test(book.title) && book.listPrice.amount >= this.filterBy.price)
		},
	},
}
