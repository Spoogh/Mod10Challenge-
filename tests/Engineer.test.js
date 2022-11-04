
const Engineer = require('../lib/Engineer');

const hubert = new Engineer('Hubert', 12, 'hubert@hotmail.com', 'spoogh');

describe("Engineer class",()=>{
    describe("Engineer class methods",()=>{
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
            expect(hubert.getRole()).toBe('Engineer')
        });

        it("gets github", ()=>{
            expect(hubert.getGithub()).toBe('spoogh')
        });
    })
});