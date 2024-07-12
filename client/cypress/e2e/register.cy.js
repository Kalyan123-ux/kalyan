describe('Register Page E2E Testing',function(){
    beforeEach(function(){
        cy.fixture('user').then((user)=>{
           this.userData=user;
        })
    })
    it('Testing Register Page Functionality',function(){
        cy.visit('/Register');
        cy.get('h1').should('contain','Register');
        cy.get('input[name="Name"]').type(this.userData.name);
        cy.get('input[name="Username"]').type(this.userData.name)
        cy.get('input[name="Password"]').type(this.userData.name)
        cy.get('button[type="button"]').click({multiple:true})
    })
})