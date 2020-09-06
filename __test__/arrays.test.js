import {arrayColors, arrayFruit} from '../arrays'

describe('prueba arrays', ()=>{
    test('contiene banana', ()=>{
        expect(arrayFruit()).toContain("banana")
    })
    test('no contiene plarano', ()=>{
        expect(arrayFruit).not.toContain('platano')
    })
    test('comprobar tamaño', ()=>{
        expect(arrayFruit()).toHaveLength(5)
    })
    test('existe un color',()=>{
        expect(arrayColors()).toContain('azul')
    })
})