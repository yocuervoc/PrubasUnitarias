import {sumar, multiplicar, restar, dividir} from '../maths'

describe('calculos matematicos', ()=>{
    test('prueba de suma', ()=>{
        expect(sumar(1,1)).toBe(2)
    })
    test('prueba multiplicar',()=>{
        expect(multiplicar(2,2)).toBe(4)
    })
    test('prueba restar',()=>{
        expect(restar(2,2)).toBe(0)
    })
    test('prueba dividir',()=>{
        expect(dividir(9,3)).toBe(3)
    })
})

