describe('Home PageTest',()=>{
    it('Check the Input field',()=>{
        cy.visit('/home')
       
       cy.get('input').type('Cinderella')
        
        cy.get('button').should('be.visible')
        cy.get('button').click()
        cy.contains('Welcome, Cinderella')
        cy.get('input').should('have.value','Cinderella')
    })
})