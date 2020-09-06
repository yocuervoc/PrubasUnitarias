import {isNull, isFalse, isTrue, isUndefined} from '../true'
import { TestScheduler } from 'jest'

describe("probar resultados nulos", ()=>{
    test('null',()=>{
        expect(isNull()).toBeNull();
    })
})

describe("probar resultado false", ()=>{
    test("false", ()=>{
        expect(isFalse()).toBeFalsy()
    })
})
describe("probar resultado true", ()=>{
    test("true", ()=>{
        expect(isTrue()).toBeTruthy()
    })
})
describe("probar resultado undefined", ()=>{
    test("undefined", ()=>{
        expect(isUndefined()).toBeUndefined()
    })
})
