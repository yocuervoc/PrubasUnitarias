/// despues de cada prueba

afterEach(()=> console.log('despues de cada prueba'))
afterAll(()=> console.log('despues de todas la pruebas'))


//antes de cada prueba

beforeAll(()=> console.log('antes de todas la pruebas'))
beforeEach(()=> console.log("antes de cada la pruebas"))


describe('prepara anted de ejecutar', ()=>{
    test('es verdadero', ()=>{
        expect(true).toBeTruthy()
    })
    test('es verdadero', ()=>{
        expect(false).toBeFalsy()
    })
})