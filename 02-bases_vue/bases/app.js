const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
    // `
    data(){
        return{
            quote: 'Mi nombre es panda morales',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log("Hola Mundo")
            this.author = 'Mario Morales'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')