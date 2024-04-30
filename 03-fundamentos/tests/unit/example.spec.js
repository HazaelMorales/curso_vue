//Test suit
describe('Example Component', () => {
  //test(Nombre del test, funcion para realizar test)
  test('Debe de ser mayor a 10', ()=>{

    //Arreglar
    let value = 10;

    //Estimulo
    value = value + 2

    //Observar el resultado
    expect(value).toBeGreaterThan(10)
  })
})
