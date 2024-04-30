//Importamos unas herrmientas de test de vue
import {shallowMount, mount} from '@vue/test-utils'

//Importamos el componente
import Counter from '@/components/Counter'

// Describe el conjunto de pruebas para el componente Counter
describe('Counter Component', () => {

    let wrapper

    // beforeEach() se ejecuta antes de cada prueba, y aquí se inicializa el wrapper
    beforeEach(() => {
        // shallowMount se utiliza para montar el componente Counter sin renderizar sus componentes hijos
        wrapper = shallowMount(Counter)
    })

    // // Prueba para verificar si el componente coincide con el snapshot
    // test('Debe de hacer match con el snapshot', () => {
    //     // Monta el componente Counter para realizar pruebas
    //     const wrapper = shallowMount(Counter)
    //     // Verifica si el HTML renderizado del componente coincide con el snapshot existente
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('H2 debe tener el valor por defecto "Contador"', ()=>{
        //Esperamos si existe la etiqueta h2, en caso de que exista lanza un verdadero
        expect(wrapper.find('h2').exists()).toBeTruthy()

        //Obtenemos el dato de h2
        const h2Value = wrapper.find('h2').text()
        
        //Esperamos que el dato de h2, sea igual a contador
        expect(h2Value).toBe('Contador!')
    })

    test('P debe tener valor por defecto 100',()=>{
        //obetenemos todas las etiquetas p de nuestro componente
        // const pTags = wrapper.findAll('p')

        //Obtenemos el ptag con el identificacor unico
        const value = wrapper.find('[data-testid="counter"]').text()

        //Expect segundo p === 100
        expect(value).toBe('100')    
    })

    test('Debe de incrementear y decrementar el contador', async() =>{
        //Obtenemos los botones de incremento y decremento, despues de desestructurar todas las etiquetas button que manadamos a llamar.
        const [increaseBtn, deacreaseBtn] = wrapper.findAll('button')

        //Increase -> incrementara en 3 el contador, ya que se dara click 3 veces
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        //Decrease -> decrementara en 2 el contador, ya que se dara click 2 veces
        await deacreaseBtn.trigger('click')
        await deacreaseBtn.trigger('click')

        //Obtenemos el ptag con el identificacor unico
        const value = wrapper.find('[data-testid="counter"]').text()

        //Verificamos si el valor de la ptag con el identificador unico es 101
        expect(value).toBe('101')

    })

    test('Debe de establecer el valor por defecto',()=>{
        //Obtengo el dato start, de las propiedades propierties(props)
        const {start} = wrapper.props()

        //Obtenemos el valor del contador
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('debe de mostrar la prop title', ()=>{
        //Creamos una constante title con el valor Hola Mundo!!!
        const title_constante = 'Hola Mundo !!!!'

        //Enviamos la constante title_constante, en la propertie "title"
        const wrapper = shallowMount(Counter,{
            props:{
                title: title_constante
            }
        })

        //Verificamos si el texto en el h2 de nuestro componente es igual a la constante
        expect(wrapper.find('h2').text()).toBe(title_constante)
    })
})