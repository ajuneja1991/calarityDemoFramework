/// <reference types="Cypress"/>

describe("Calarity Session Feature Automation", ()=>{

    beforeEach(()=>{

        cy.visit("https://calstagingstorage.z14.web.core.windows.net/");
        cy.get('.ml-lg-auto').click();
        cy.get('.ml-lg-auto').click();
        cy.get('.form-content > .text-center').should('have.text','Login As Admin');

    })

    it('Verify clinician is able to view Session Page',()=>{
        cy.intercept("https://calarity-s.azurewebsites.net/api/survey/manageSurveyQuestions?profile=1").as("manageSurveyapi");
        cy.login("admin@calarity.com","admin");
    });

})