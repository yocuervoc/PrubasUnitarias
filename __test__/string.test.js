
describe('comprobar cadenas de texto', ()=>{
    const text = "un bonito texto"
    test('debe contenr elsiguiente texto', ()=>{
        expect(text).toMatch(/bonito/)
    })
    test('no contiene string', ()=>{
        expect(text).not.toMatch(/test/)
    })
})