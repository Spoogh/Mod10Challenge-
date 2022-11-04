

const Employee = require('../lib/Employee');

const hubert = new Employee('Hubert', 12, 'hubert@hotmail.com');

describe("Employee class",()=>{
    describe("Employee class methods",()=>{
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
            expect(hubert.getRole()).toBe('Employee')
        });
    })
});