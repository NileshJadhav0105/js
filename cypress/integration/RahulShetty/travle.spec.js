    // eq(), first(),last(),prev(),next(),nextAll(),prevAll(),siblings(),filter(),children(),not(),find(),nextUntile(),prevUntil()

    describe("Travels methods",()=>{

        it("select element using .eq()",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('.nav-pills').children().eq(1).should("contain","Apparel & accessories")
        })

        it("select first element using .first()",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('.nav-pills').children().first().should('contain','Home')
        })

        it("select last element using .last()",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('.nav-pills').children().last().should('contain','Books')
        })
        
        it("select next element using .next",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').parent().next().should('contain','Makeup')
        })

        it("select previous element using .prev",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').parent().prev().should('contain','Home')
        })

        it('select next all element using .nexrAll',()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').parent().nextAll().should('have.length',6)
        })

        it("select all previous element using .prevAll ",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').parent().prevAll().should('have.length',5)
        })

        it("select all siblings using .sibling",()=>{
            cy.visit("https://automationteststore.com/")
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').parent().siblings().should('have.length',7)
        })

        it("filter the element using .filter",()=>{
            cy.visit('https://automationteststore.com/')
            cy.get('.nav-pills').children().find('a').filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').should('contain','Makeup')
        })

        it("remove element using .not",()=>{
            cy.visit('https://automationteststore.com/')
           cy.get('.info_links_footer').children().find('a').not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').should('have.length',6)
        })

        it("find element using .find",()=>{
            cy.visit('https://automationteststore.com/')
            cy.get('.info_links_footer').children().find('a').should('have.length',7)
        })

        it.only("select until all element using .nextUntil",()=>{
            cy.visit('https://automationteststore.com/')
            cy.get('.promo_block').first().nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4)').should('have.length',2)
        })
        
        it.only('select prev element until using .prevUntil',()=>{
            cy.visit('https://automationteststore.com/')
            cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)
        })

    })
