describe('open Home page',()=>{
    it('open Home Page',()=>{
        cy.visit('/')
        //visit('url)
        cy.contains('Register')
        cy.contains('Login')
    })
})