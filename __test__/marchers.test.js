
describe("comparadores comunes", ()=>{
    const user ={
        name: "Yonatan",
        lastName: "cuervo"
    }
    const user2 ={
        name: "Yonatan",
        lastName: "cuervo2"
    }
    // test('igualda de elementos', ()=>{
    //     expect(user).toEqual(user2)
    // })
    test('no son exacatamente iguales', ()=>{
        expect(user).not.toEqual(user2)
    })
})