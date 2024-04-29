// Se crea una instancia de la aplicación Vue
const app = Vue.createApp({
    // Se define el estado inicial de la aplicación
    data(){
        return{
            // Se inicializan las propiedades 'quote' y 'author' con valores predeterminados
            quote: 'Mi nombre es panda morales',
            author: 'Bruce Wayne'
        }
    },
    // Se definen los métodos que manejan la lógica de la aplicación
    methods: {
        // Método para cambiar la cita y el autor
        changeQuote(){
            console.log("Hola Mundo")
            // Se cambia el autor a 'Mario Morales'
            this.author = 'Mario Morales'
            // Se llama al método 'capitalize' para convertir la cita en mayúsculas
            this.capitalize()
        },
        // Método para convertir la cita en mayúsculas
        capitalize(){
            // Se convierte la cita a mayúsculas y se asigna nuevamente a la propiedad 'quote'
            this.quote = this.quote.toUpperCase()
        }
    }
})

// Se monta la aplicación en el elemento con el ID 'myApp' en el HTML
app.mount('#myApp')