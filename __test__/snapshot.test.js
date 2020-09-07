import {getCharacter} from "../snapshot"
import rick from '../rick.json'

describe("es hora de la snapshot", ()=>{
    test(' test de snapshot', ()=>{
        expect(getCharacter(rick)).toMatchSnapshot()
    })
    test("excepciones de snapshot ", ()=>{

        const user={
            id: Math.floor(Math.random() * 20),
            name: "Yonatan Cuervo"
        }
        expect(user).toMatchSnapshot({
            id:expect.any(Number)
        })
    })
})
