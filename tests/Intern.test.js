const Intern = require('../lib/Intern');

const hubert = new Intern('Hubert', 12, 'hubert@hotmail.com', 'University of Texas');

describe("Intern class",()=>{
    describe("Intern class methods",()=>{
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
            expect(hubert.getRole()).toBe('Intern')
        });

        it("gets github", ()=>{
            expect(hubert.getSchool()).toBe('University of Texas')
        });
    })
});