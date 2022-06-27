import contactSite from "../../POM/contact";

let details = new contactSite()

describe("POM with web driver site",()=>{
    it('contact us page',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get(details.elFname).type('Nilesh')
        cy.get(details.elLname).type('Jadhav')
        cy.get(details.elemail).type('nilesh@gmail.com')
        cy.get(details.cmnt).type('qwerty')
        cy.get("input[value='SUBMIT']").click()
    })
})