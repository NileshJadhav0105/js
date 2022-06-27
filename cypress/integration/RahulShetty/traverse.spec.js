

// eq(), first(),last(),prev(),next(),nextAll(),prevAll(),siblings(),filter(),children(),not(),find(),nextUntile(),prevUntil()

 describe('Travers Methods on jQuery ',()=>{
    it('Select element using .eq()',()=>{
        cy.visit('https://jquery.com/')
        cy.get('a[href="https://api.jquery.com/"]').eq(0).click().should('have.contain','API Documentation')
        //.cat-item>a[href="//api.jquery.com/category/ajax/global-ajax-event-handlers/"]
        cy.get('a[href="//api.jquery.com/category/ajax/global-ajax-event-handlers/"]').first().click().should('have.contain','Global Ajax Event Handlers')
        cy.get('.entry-title').last().click().should("have.contain",'.ajaxSuccess()')
        cy.get('')
    })
})