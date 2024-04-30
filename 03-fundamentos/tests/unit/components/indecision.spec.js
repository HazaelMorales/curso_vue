//Importamos unas herrmientas de test de vue
import {shallowMount, mount} from '@vue/test-utils'

//Importamos el componente
import Indecision from '@/components/Indecision'

describe("Indecision Component",()=>{
    let wrapper
    let consoleLogSpy
    
    //CREACION DE UN MOCK
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    // beforeEach() se ejecuta antes de cada prueba, y aquí se inicializa el wrapper
    beforeEach(() => {
        // shallowMount se utiliza para montar el componente Counter sin renderizar sus componentes hijos
        wrapper = shallowMount(Indecision)
        
        // Se crea un espía para el método console.log
        consoleLogSpy = jest.spyOn(console, 'log')

        // Se limpian todos los mocks creados
        jest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        // Se compara el HTML renderizado del componente con el snapshot existente
        expect(wrapper.html()).toMatchSnapshot()
    })
    
    test('Escribir en el input no debe de disparar nada (console.log)', async () => {
        // Se espía el método getAnswer del componente
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    
        // Se encuentra el elemento de input y se establece su valor
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')
    
        // Se verifica que console.log no haya sido llamado y que getAnswer no haya sido llamado
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })
    
    test('Escribir el símbolo de "?" debe de disparar el fetch', async () => {
        // Se espía el método getAnswer del componente
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    
        // Se encuentra el elemento de input y se establece su valor
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')
    
        // Se verifica que console.log haya sido llamado una vez y que getAnswer haya sido llamado
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })
    
    test('Pruebas en getAnswer', async () => {
        // Se llama al método getAnswer del componente
        await wrapper.vm.getAnswer()
    
        // Se encuentra el elemento img
        const img = wrapper.find('img')
    
        // Se verifica que el elemento img exista, que la propiedad img del componente sea la esperada y que la propiedad answer sea la esperada
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    })
    
    test('Pruebas en getAnwser - Fallo en el API', async () => {
        // Se simula un fallo en la llamada al API
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    
        // Se llama al método getAnswer del componente
        await wrapper.vm.getAnswer()
    
        // Se encuentra el elemento img
        const img = wrapper.find('img')
    
        // Se verifica que el elemento img no exista y que la propiedad answer del componente sea la esperada
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
    })
})