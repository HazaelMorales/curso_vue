<template>
    <div>
        <h1>Indecision</h1>
        <!--Valida si hay una imagen para cargarla-->
        <img v-if="img" :src="img" alt="bg"> 
        <div class="bg-dark"></div> 

        <div class="indecision-container">
            <input 
                type="text" 
                placeholder="Hazme una pregunta"
                v-model="question">

            <p>Recuerda terminar con un signo de interrogacion (?)</p>

            <!--Valida si la pregunta es valida (true), mostrara la pregunta y la respuesta-->
            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div> 
        </div>  
    </div>
</template>

<script>
export default {
    /*
        Función que retorna los datos locales del componente
        
        ARGS:
            question -> nulo
            answer -> nulo
            img -> nulo
            isValidQuestion -> falso
    */
    data(){
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },

    methods: {
    // Método para obtener una respuesta de la API
    async getAnswer() {
            try{
                // Se establece la respuesta inicial mientras se espera la respuesta de la API
                this.answer = 'Pensando....'
                
                // Se hace una solicitud a la API y se espera la respuesta
                const { answer, image } = await fetch('https://yesno.wtf/api').then(response => response.json())
                
                // Se actualiza la respuesta con el resultado obtenido de la API
                this.answer = answer === 'yes' ? 'Si!' : 'No'
                
                // Se actualiza la imagen con el resultado obtenido de la API
                this.img = image
            
            }catch(error){
                console.log('IndecisionComponent: ', error)
                this.answer = 'No se pudo cargar el API'
                this.img = null
            }
        }
    },

    watch: {
        // Vigilancia de cambios en la pregunta
        question(value, oldValue) {
            // Se establece inicialmente que la pregunta no es válida
            this.isValidQuestion = false

            console.log({value})
            
            // Si la pregunta no incluye un signo de interrogación, no se realiza nada más
            if (!value.includes('?')) return
            
            // Si la pregunta es válida, se actualiza el estado de isValidQuestion y se llama al método getAnswer()
            this.isValidQuestion = true
            this.getAnswer()
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>