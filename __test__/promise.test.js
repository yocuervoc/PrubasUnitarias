import {getData} from '../promise'

describe('probando una promise', ()=>{
    test('realizando un get', done=>{
        const api = 'https://rickandmortyapi.com/api/character/'
        getData(api).then(data =>{
            
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })
    
    test('resolver un hola', ()=>{
        return expect(Promise.resolve('hola')).resolves.toBe('hola')
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
    })

    test('rechaza con un erro 2', ()=>{
        return expect(Promise.reject('Error')).rejects.toBe('Error')
    })
})