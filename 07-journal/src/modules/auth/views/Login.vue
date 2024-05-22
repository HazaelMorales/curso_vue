<template>
    <div>
        <span class="login100-form-title p-b-41">Ingresar</span>
        <form class="login100-form validate-form p-b-33 p-t-5"
            @submit.prevent="onSubmit">

            <div class="wrap-input100 validate-input" data-validate = "Enter email">
                <input v-model="userForm.email" class="input100" type="email" placeholder="Correo" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
                <span class="focus-input100" data-placeholder="&#xe80f;"></span>
            </div>

            <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                    Login
                </button>

            </div>

            <div class="container-login100-form-btn m-t-32">
                <router-link :to="{ name:'register' }">¿No tienes cuenta?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2'

export default {
    setup() {
        
        // Obtiene una instancia del enrutador de Vue Router
        const router = useRouter()
        // Obtiene las funciones de autenticación del composable useAuth
        const { loginUser } = useAuth()

        // Crea una referencia reactiva para almacenar los datos del formulario de usuario
        const userForm = ref({
            email: '',
            password:'',
        })

        // Retorna un objeto con las referencias y métodos que se utilizan en el componente Vue
        return {
            userForm, // Referencia reactiva al formulario de usuario
            onSubmit: async () => { // Función que maneja el envío del formulario
                // Intenta iniciar sesión con los datos del formulario del usuario
                const { ok, message } = await loginUser(userForm.value)

                // Si el inicio de sesión no fue exitoso, muestra un mensaje de error
                if (!ok) Swal.fire('Error', message, 'Error')
                // Si el inicio de sesión fue exitoso, redirige al usuario a la página 'no-entry'
                else router.push({ name: 'no-entry' })
            }
        }
    }
}
</script>

<style>

</style>