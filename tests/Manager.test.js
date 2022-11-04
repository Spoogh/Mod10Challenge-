const Manager = require('../lib/Manager');

const hubert = new Manager('Hubert', 12, 'hubert@hotmail.com', 77);

describe("Manager class",()=>{
    describe("Manager class methods",()=>{
        it("gets name",()=>{
            expect(hubert.getName()).toBe('Hubert');
        });

        it("gets id", ()=>{
            expect(hubert.getId()).toBe(12);
        });

        it("gets email", () =>{
            expect(hubert.getEmail()).toBe('hubert@hotmail.com')
        });

        it("gets role", ()=>{
            expect(hubert.getRole()).toBe('Team Manager')
        });

        it("gets github", ()=>{
            expect(hubert.getOfficeNumber()).toBe(77)
        });
    })
});