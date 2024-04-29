// Se define un array de citas con diferentes frases y sus respectivos autores
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

// Se crea una instancia de la aplicación Vue
const app = Vue.createApp({
    // Se define el estado inicial de la aplicación
    data(){
        return{
            // Se asigna el array de citas al atributo 'quotes'
            quotes,
            // Se inicializa una nueva cita con el valor 'Hola Mundo'
            newQuote: 'Hola Mundo'
        }
    },
    // Se definen los métodos que manejan la lógica de la aplicación
    methods:{
        // Método para agregar una nueva cita al principio del array 'quotes'
        addQuote(){
            // Se agrega un nuevo objeto al inicio del array 'quotes' con la cita ingresada en 'newQuote'
            this.quotes.unshift({
                quote: this.newQuote
            })
        }
    }
})

// Se monta la aplicación en el elemento con el ID 'myApp' en el HTML
app.mount('#myApp')