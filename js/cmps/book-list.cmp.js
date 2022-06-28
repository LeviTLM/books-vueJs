import bookPreview from "../cmps/book-preview.cmp.js"
export default {
  props: ["books"],
  template: `
    <section class="book-list">
            <article v-for="book in books" :key="book.id" class="book-preview-container" @click="select(book)">
                <book-preview :book="book"/>
            </article>
    </section>
  `,
  components: {
    bookPreview,
  },
  data() {
    return {

    }
  },
  methods: {
    remove(bookId) {
      this.$emit("removed", bookId)
    },
    select(book) {
      this.$emit("selected", book)
    },
  },
  computed: {

  },

}