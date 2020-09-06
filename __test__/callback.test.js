import {callbackfunction} from '../callback'

describe('probando callbacks', ()=>{
    test('Callback', (done)=>{
        function otherCallback(data){
            expect(data).toBe('Hola Yocc')
            done()
        }
        callbackfunction(otherCallback);
    })
    test('resolver un hola', ()=>{
        return expect(Promise.resolve('hola')).resolves.toBe('hola')
    });
})


