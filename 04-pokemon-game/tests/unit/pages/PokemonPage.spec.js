import { shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', ()=>{
    let wrapper
    let mixPokemonArraySpy
    let wrapperShallowProps
    
    beforeEach(()=>{
        mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray').mockResolvedValue(pokemons)

        wrapper = shallowMount(PokemonPage)

        wrapperShallowProps = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
    })

    test('debe de hacer un match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar mixPokemonArray al montar', () =>{
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot una vez cargado los pokemons', ()=>{
        expect(wrapperShallowProps.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions',()=>{
        
        //PokemonPicture debe de existir
        //PokemonOptions debe de existir
        const pkpicture = wrapperShallowProps.find('pokemon-picture-stub')
        const pkoption = wrapperShallowProps.find('pokemon-options-stub')

        expect(pkpicture.exists()).toBeTruthy()
        expect(pkoption.exists()).toBeTruthy()

        
        //PokemonPicture attribute pokemonid === 5
        expect(pkpicture.attributes('pokemonid')).toBe('5')


        //PokemonOptions attribute pokemons toBe true
        expect(pkoption.attributes('pokemons')).toBeTruthy()
    })

    test('Prueba con checkAnswer', async()=>{
        await wrapperShallowProps.vm.checkAnswer(5)

        expect(wrapperShallowProps.find('h2').exists()).toBeTruthy()
        expect(wrapperShallowProps.vm.showPokemon).toBeTruthy()
        expect(wrapperShallowProps.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`)

        await wrapperShallowProps.vm.checkAnswer(10)
        expect(wrapperShallowProps.vm.message).toBe(`Oops!, era ${pokemons[0].name}`)

    })
})