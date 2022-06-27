describe('Validate search bar',()=>{
    it('search bar',()=>{
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[class="search-keyword"]').type('to')
        
    })
})