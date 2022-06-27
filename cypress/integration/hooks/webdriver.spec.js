import {data} from "../../fixtures/contactUs.json"


describe('WebDriver site for hooks',()=>{
    before(()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.contains('CONTACT US').invoke('removeAttr','target').click()
    })
    
    // after(()=>{
    //     cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    // })
    // beforeEach(()=>{
    //     cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
    // })

    afterEach(()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('fill details for submit',()=>{
        // cy.contains('CONTACT US').invoke('removeAttr','target').click()
        //cy.fixture('contactUs').then((data)=>{
        cy.get(data[0].f_name).type(data[1].f_name)
        cy.get(data[0].l_name).type(data[1].l_name)
        cy.get(data[0].email).type(data[1].email)
        cy.get(data[0].msg).type(data[1].msg)
        cy.get(data[0].sbmit).click()
        cy.get(data[0].asrt).should('contain',data[1].asrt)
        // })
    })

    it('fill details for reset',()=>{
        // cy.fixture('contactUs').then((data)=>{
            // cy.log(data[0])
        // cy.contains('CONTACT US').invoke('removeAttr','target').click()
        cy.get(data[0].f_name).type(data[1].f_name)
        cy.get(data[0].l_name).type(data[1].l_name)
        cy.get(data[0].email).type(data[1].email)
        cy.get(data[0].msg).type(data[1].msg)
        cy.get(data[0].reset).click()
        cy.get(data[0].email).should('be.empty')
        // })
    })

//     let dat
//     beforeEach(()=>{
//     cy.fixture('contactUs').then((el)=>{
//         dat = el
//     })
// })


data.forEach((el) => {
    it('fill details with outside fixture',()=>{
        // cy.contains('CONTACT US').invoke('removeAttr','target').click()
        cy.log(data[0])
        cy.get(data[0].f_name).type(data[1].f_name)
        cy.get(data[0].l_name).type(data[1].l_name)
        cy.get(data[0].email).type(data[1].email)
        cy.get(data[0].msg).type(data[1].msg)
        cy.get(data[0].sbmit).click()
        cy.get(data[0].asrt).should('contain',data[1].asrt)
        
        })
    })
})