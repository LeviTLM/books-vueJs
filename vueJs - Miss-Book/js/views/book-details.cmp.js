import longText from '../cmps/long-text.cmp.js'

export default {
	props: ['book'],
	template: `
    <section class="book-details-modal">
        <div class="img">
            <img :src="book.thumbnail
    " alt="">
        </div>
        <div class="details-text-modal">
            <h3>{{book.title}}</h3>
            <h4 class="book-subtitle">{{book.subtitle}}</h4>
            <p>By:
                <span v-for="author in book.authors">
                  <a href="#">{{author}} </a> (Author) 
                </span>
            </p>
            <h3>Description</h3>
            <!-- <p> {{book.description}}</p> -->
            <long-text :text="book.description"></long-text>

            <h3>Product Details</h3>
            <div class="product-details-modal">
                <p> Price <span :class="priceClass">{{priceToDisplay}}</span></p>
                <p> Publish Date <span> {{book.publishedDate}}</span> <span>{{publishDateMsg
                  }}</span></p>
                <p> Pages <span>{{book.pageCount}}</span> <span>{{pageCountMsg}}</span></p>
                <p>Language <span>{{book.language}}</span></p>
                <p> EAN/UPC <span> {{book.id}}</span></p>
            </div>
            <div class="categories-modal">Categories 
              <a href="#" v-for="category in book.categories">
              {{category}} </a>
            </div>
         </div>
        <button class="close-modal" @click="$emit('close')">Close</button>
    </section>
  `,
	data() {
		return {}
	},
	methods: {},
	computed: {
		priceToDisplay() {
			return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
		},
		pageCountMsg() {
			const pageCount = this.book.pageCount
			if (pageCount > 500) return ' Long reading'
			else if (pageCount > 200) return ' Decent reading'
			else if (pageCount < 100) return ' Light reading'
		},
		publishDateMsg() {
			const publishDate = this.book.publishedDate
			const currYear = new Date().getFullYear()
			const diff = currYear - publishDate
			if (diff > 10) return ' Veteran book'
			else if (diff < 1) return ' New book'
		},
		priceClass() {
			const price = this.book.listPrice.amount
			if (price > 150) return 'red'
			else if (price < 20) return 'green'
		},
	},

	components: {
		longText,
	},
}
