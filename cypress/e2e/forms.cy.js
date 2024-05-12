 describe('form tests', () =>{
    beforeEach(() =>{
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('abc@gmail.com')
        cy.contains(/Successfully subbed: abc@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: abc@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: abc@gmail.com!/i).should('not.exist')
    })
 })