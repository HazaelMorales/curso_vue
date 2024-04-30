<template>
    <div>
        <!-- 
            Este fragmento de código representa la parte de la plantilla del componente Counter en Vue.js.
            - <h2>{{ customTitle }}</h2>: Muestra el título personalizado del contador.
            - <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>: Muestra el valor actual del contador, su cuadrado y el resultado del cuadrado.
            - <div>: Inicia un contenedor para los botones de incremento y decremento.
            - <button @click="increase">+1</button>: Botón para incrementar el contador en 1 al hacer clic.
            - <button @click="decrease">-1</button>: Botón para decrementar el contador en 1 al hacer clic.
        -->
        <h2>{{customTitle}}</h2>
        <p>{{ counter }} <sup>2</sup> = {{squareCounter}}</p>

        <!--Identificador unico-->
        <p data-testid="counter">{{ counter }}</p>

        <div>
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // Definición de las propiedades del componente
        title: String, // Propiedad "title" de tipo String
        start: { // Propiedad "start"
            type: Number, // Tipo de la propiedad: Number
            default: 100, // Valor por defecto: 100
            // Validador personalizado para la propiedad "start"
            validator(value) {
                // Valida que el valor sea mayor que 0
                return value > 0
            }
        }
    },
    data() {
        // Función que retorna los datos locales del componente
        return {
            counter: this.start // Inicializa el contador con el valor de la propiedad "start"
        }
    },
    methods: {
        // Métodos del componente
        getSquareValue() {
            // Método que retorna el cuadrado del contador
            return this.counter * this.counter
        },
        increase() {
            // Método para incrementar el contador
            this.counter++
        },
        decrease() {
            // Método para decrementar el contador
            this.counter--
        }
    },
    computed: {
        // Propiedades computadas del componente
        squareCounter() {
            // Retorna el cuadrado del contador usando una propiedad computada
            return this.counter * this.counter
        },
        customTitle() {
            // Retorna el título personalizado del contador, si está definido, de lo contrario devuelve 'Contador'
            return this.title || 'Contador!'
        }
    }
}
</script>

<style scoped>
    button{
        background-color:#64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor:pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;

    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>