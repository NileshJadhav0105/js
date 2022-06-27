 describe('validate amazon website phone',()=>{
     it('validate amazon',()=>{
         cy.visit('https://www.amazon.in/')
         cy.get('#twotabsearchtextbox').type('iphone 13').type('{enter}')
         cy.get('.a-icon.a-icon-star-small.a-star-small-4-5.aok-align-bottom').each((el)=>{
             cy.log(el.text())
         })
    })
 })
