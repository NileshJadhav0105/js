// Kesari tours
// validate the nav bar with fixture
// validate the url for each nav
// based on date selection validate the number of tours in each state
// validate text of blink element
// validate search dynamic dropdown



describe('Kesari Tours and Travels',()=>{
    it('Group Tours',()=>{
        cy.visit('https://www.kesari.in/')
        cy.fixture('validate').then((data)=>{
            //cy.log(data)
            cy.get('ul[class="menu list-unstyled mb-0"]').children().each((el,index)=>{
                let txt = el.find('a').text()
                cy.wrap(txt).should('have.contain',data[index])
            })
        })
        
    })
    it.only("validate url using fixtures",()=>{
        cy.visit('https://www.kesari.in/')
        cy.fixture('kesariurl').then((data)=>{
            //cy.log(data)
            cy.get('ul[class="menu list-unstyled mb-0"]').children().find('a:first').each((el,index)=>{
                if(el.text('').startsWith('/')){
                    cy.url().should('contain',data[index])
                }
            })
1
        })
    })
// })
// it('TC-05 based on date selection validate the number of tours in each state', () => {
//     obj.click('a[ui-sref="group({})"]')
//     obj.clickMe('label[class="ng-binding"]', 0)
//     cy.get('#tour-detail-div > div').each((el) => {
//         cy.wrap(el).should('contain', el.text())

//     })

 })
