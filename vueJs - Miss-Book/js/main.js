const { createApp } = Vue
import bookApp from "./views/book-app.cmp.js";


const options = {
    template: `
    <book-app/>
    `,
    data() {
        return {
        }
    },
    methods: {

       
    },
    computed: {

    },
    components: {
        bookApp,
      },
}

const app = createApp(options)
// app.component('bookApp', bookApp)

app.mount('#app')
