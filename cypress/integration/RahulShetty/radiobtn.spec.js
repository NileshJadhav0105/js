describe("Radio Button",()=>{
    it('Radio button using .check()',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
    })
    it('Radio button using .click()',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').click().should('be.checked')
    })    
})