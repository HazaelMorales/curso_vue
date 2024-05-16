<template>
    <div>
        <h1>Aprendiendo slots</h1>
        <!-- Botón para abrir el modal -->
        <button @click="openModal">Abrir Modal</button>

        <!-- Componente Modal -->
        <modal v-if="isOpen"
            title="Hola Mundo"
            @on:close="closeModal"> <!-- Evento emitido cuando se cierra el modal -->
            <!-- Contenido personalizado del modal utilizando ranuras (slots) -->
            <!-- Ranura para el cuerpo del modal -->
            <template v-slot:body>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt.</p>
            </template>
            <!-- Ranura para el pie del modal -->
            <template v-slot:footer>
                <button @click="closeModal">Cerrar</button>
            </template>
            <!-- Ranura para el encabezado del modal -->
            <template v-slot:header>
                <h2>Titulo del modal</h2>
            </template>
            <!-- Ranura expuesta para acceder a 'newTitle' -->
            <template v-slot:exposed="{ newTitle }">
                <h2>{{ newTitle }}</h2>
            </template>
        </modal>
    </div>
</template>

<script>

import { ref } from 'vue'
// Importa el componente Modal
import Modal from '../components/Modal.vue'

export default {
    components: { Modal }, // Registra el componente Modal
    setup() {
        const isOpen = ref(false)

        // Retorna los datos y métodos necesarios para el componente
        return {
            isOpen, // Indica si el modal está abierto o cerrado
            // Función para abrir el modal
            openModal: () => isOpen.value = true,
            // Función para cerrar el modal
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style>
</style>